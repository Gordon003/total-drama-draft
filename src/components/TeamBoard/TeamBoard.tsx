import React, { useContext } from 'react';
import { useDraftContext } from '../../contexts/DraftContext';
import PlayerCard from '../PlayerCard/PlayerCard';
import PlayerEmptyCard from 'components/PlayerCard/PlayerEmptyCard';
import './TeamBoard.css';
import DraftBoard from 'components/DraftBoard/DraftBoard';
import { findCharacterById, findCharactersByIds } from 'utils/getCharacter';

interface TeamBoardProps {
    handlePlayerSelect: (index: number) => void
    handlePlayerEmptySelect:  (index: number) => void
    handleLeaderSelect: (index: number) => void
    handleEmptyLeaderSelect: (index: number) => void
    inputLeader: string,
    inputTeam: string[]
}


const TeamBoard: React.FC<TeamBoardProps> = ({ handlePlayerSelect, handlePlayerEmptySelect, handleLeaderSelect, handleEmptyLeaderSelect, inputLeader, inputTeam}) => {
    
    const divStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background/background001.jpg)`,
        backgroundRpeat: 'no-repeat'
    }

    const team = findCharactersByIds(inputTeam);
    const leader = findCharacterById(inputLeader);

    return (
        <div className="team-board" style={divStyle}>
            <div className="team-board-div">
                <table className="team-board-table">
                    <tbody>
                    <tr>
                        <td style={{width: '20%'}}>
                            <div style={{height: '30%'}}>
                                    <div key="asd" style={{ height: '100%' }} onClick={() => handleEmptyLeaderSelect(-1)}>
                                    {leader && <PlayerCard key="leader" index={-1} character={leader} handleClick={handleLeaderSelect} /> }
                                        {!leader && <PlayerEmptyCard key="leader" index={-1} handleClick={handleEmptyLeaderSelect}/> }
                                </div>
                                <h1 style={{backgroundColor:'white', textAlign: 'center'}}> LEADER </h1>
                            </div>
                        </td>
                        <td style={{ width: '80%', height: '100%'}}>
                            <h1> TEAM NAME: </h1>
                            <div className="character-board" style={{ border:'10px solid rgb(131, 76, 14, 0.8)'}}>
                                {team.map(function (character, i) {
                                    if (typeof character === 'undefined') {
                                        return <div key={i}> < PlayerEmptyCard index={i} handleClick={handlePlayerEmptySelect} /> </div>
                                    } else {
                                        return <div key={i}> < PlayerCard index={i} character={character} handleClick={handlePlayerSelect} /> </div>
                                    }
                                })}
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeamBoard