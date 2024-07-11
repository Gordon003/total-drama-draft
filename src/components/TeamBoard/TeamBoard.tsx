import React, { useContext } from 'react';
import { useDraftContext } from '../../contexts/DraftContext';
import PlayerCard from '../PlayerCard/PlayerCard';
import PlayerEmptyCard from 'components/PlayerCard/PlayerEmptyCard';
import './TeamBoard.css';
import DraftBoard from 'components/DraftBoard/DraftBoard';
import { findCharactersByIds } from 'utils/getCharacter';

interface TeamBoardProps {
    handlePlayerSelect: (index: number) => void
    handleEmptySelect:  (index: number) => void
    inputTeam: string[]
}


const TeamBoard: React.FC<TeamBoardProps> = ({handlePlayerSelect, handleEmptySelect, inputTeam}) => {
    
    const divStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background/background001.jpg)`,
        backgroundRpeat: 'no-repeat'
    }

    const team = findCharactersByIds(inputTeam);

    return (
        <div className="team-board" style={divStyle}>
            <div className="team-board-div">
                <table className="team-board-table">
                    <tr>
                        <td style={{width: '20%', backgroundColor: 'red'}}>
                            {/* {leader && <PlayerCard character={leader} handleClick={(char, ind) => console.log("here")} index={0} />}
                            {typeof leader === 'undefined' && <PlayerEmptyCard index={-1} showDraftButtonOnClick={showDraftButtonClick}/>} */}
                        </td>
                        <td style={{ width: '80%', height: '100%'}}>
                            <div className="character-board" style={{ border:'10px solid rgb(131, 76, 14, 0.8)'}}>
                                {team.map(function (character, i) {
                                    if (typeof character === 'undefined') {
                                        return <div> < PlayerEmptyCard key={i} index={i} handleClick={handleEmptySelect} /> </div>
                                    } else {
                                        return <div> < PlayerCard key={i} character={character} index={i} handleClick={handlePlayerSelect} /> </div>
                                    }
                                })}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default TeamBoard