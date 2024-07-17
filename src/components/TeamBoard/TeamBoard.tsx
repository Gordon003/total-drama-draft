import React, { useContext, useState } from 'react';
import { useDraftContext } from '../../contexts/DraftContext';
import PlayerCard from '../PlayerCard/PlayerCard';
import PlayerEmptyCard from 'components/PlayerCard/PlayerEmptyCard';
import './TeamBoard.css';
import DraftBoard from 'components/DraftBoard/DraftBoard';
import { findCharacterById, findCharactersByIds } from 'utils/getCharacter';
import Button from 'components/Button/Button';
import { areAllStringsNonEmpty } from 'utils/checkArr';

interface TeamBoardProps {
    handlePlayerSelect: (index: number) => void
    handlePlayerEmptySelect:  (index: number) => void
    handleLeaderSelect: (index: number) => void
    handleEmptyLeaderSelect: (index: number) => void
    handleDraftTeamName?: (value: string) => void
    handleSubmitTeam?: () => void
    handleRestartTeam?: () => void
    inputLeader: string,
    inputTeam: string[]
}


const TeamBoard: React.FC<TeamBoardProps> = ({ handlePlayerSelect, handlePlayerEmptySelect, handleLeaderSelect, handleEmptyLeaderSelect, handleDraftTeamName, handleSubmitTeam, handleRestartTeam, inputLeader, inputTeam}) => {
    
    const divStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background/background001.jpg)`,
        backgroundRpeat: 'no-repeat'
    }

    const team = findCharactersByIds(inputTeam);
    const leader = findCharacterById(inputLeader);

    const [inputValue, setInputValue] = useState<string>('');
    const [btnText, setBtnText] = useState<string>('SUBMIT TEAM')
    const [DONE, SETDONE] = useState<boolean>(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        if (typeof handleDraftTeamName != 'undefined'){
            handleDraftTeamName(event.target.value);
        }
    };

    const CHECKTEAM = areAllStringsNonEmpty(inputTeam) && typeof leader != "undefined" && typeof handleSubmitTeam != "undefined"

    const handleRestartClick = () => {
        if (typeof handleRestartTeam != 'undefined') {
            handleRestartTeam();
        }
        setBtnText("SUBMIT TEAM");
    }

    const handleSubmitClick = () => {
        if (typeof handleSubmitTeam != 'undefined' && DONE === false){
            handleSubmitTeam();
        }
        SETDONE(true)
        setBtnText("SUBMITTED!!");
    }

    return (
        <div className="team-board" style={divStyle}>
            <div className="team-board-div">
                <table className="team-board-table">
                    <tbody>
                    <tr>
                        <td style={{width: '20%'}}>
                            <div style={{height: '40%'}}>
                                    <div key="asd" style={{ height: '100%' }} onClick={() => handleEmptyLeaderSelect(-1)}>
                                    {leader && <PlayerCard key="leader" index={-1} character={leader} handleClick={handleLeaderSelect} /> }
                                        {!leader && <PlayerEmptyCard key="leader" index={-1} handleClick={handleEmptyLeaderSelect}/> }
                                </div>
                                <h1 style={{backgroundColor:'white', textAlign: 'center'}}> LEADER </h1>
                            </div>
                        </td>
                        <td style={{ width: '80%', height: '100%'}}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <label htmlFor="name-input" style={{ fontSize: '1.5em', marginRight: '1em', backgroundColor: 'white' }}>
                                    Team Name:    
                                </label>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    placeholder="Type something..."
                                    style={{
                                        fontSize: '2em', // Similar to h1 size
                                        fontWeight: 'bold',
                                        border: 'none',
                                        outline: 'none',
                                        width: '80%',
                                        boxSizing: 'border-box',
                                    }}
                                />
                            </div>

                            <br/>

                            <div className="character-board" style={{ border:'10px solid rgb(131, 76, 14, 0.8)'}}>
                                {team.map(function (character, i) {
                                    if (typeof character === 'undefined') {
                                        return <div className="playerCard" key={i}> < PlayerEmptyCard index={i} handleClick={handlePlayerEmptySelect} /> </div>
                                    } else {
                                        return <div key={i}> < PlayerCard index={i} character={character} handleClick={handlePlayerSelect} /> </div>
                                    }
                                })}
                            </div>

                            <br/>

                                <div>
                                    {typeof handleRestartTeam != 'undefined' && <Button text="RESTART TEAM" onClick={handleRestartClick} />}
                                    {/* {CHECKTEAM && <Button text={btnText} onClick={handleSubmitClick}/> } */}
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