import React, { useState } from 'react';
import { useDraft } from '../../contexts/DraftContext';
import PlayerCard from '../PlayerCard/PlayerCard';
import PlayerEmptyCard from 'components/PlayerCard/PlayerEmptyCard';
import './TeamBoard.css';
import DraftBoard from 'components/DraftBoard/DraftBoard';

interface TeamBoardProps {
}


const TeamBoard: React.FC<TeamBoardProps> = (addPlayer) => {
    const { leader, team, DRAFTTIME, SETDRAFTTIME, setCardIndex} = useDraft();

    const showDraftButtonClick = (index: number) => {
        SETDRAFTTIME(true);
        setCardIndex(index);
    }

    return (
        <div className="team-board">
            {DRAFTTIME === true &&
                <div className="draft-board-div">
                    <DraftBoard/>
                </div>
            }
            <div className="team-board-div">
                <table className="team-board-table">
                    <tr>
                        <td style={{width: '20%'}}>
                            {/* {leader && <PlayerCard character={leader} handleClick={(char, ind) => console.log("here")} index={0} />}
                            {typeof leader === 'undefined' && <PlayerEmptyCard index={-1} showDraftButtonOnClick={showDraftButtonClick}/>} */}
                        </td>
                        <td style={{ width: '80%', height: '100%', backgroundColor: 'red'}}>
                            <div className="character-board">
                                {team.map(function (character, i) {
                                    if (typeof character === 'undefined') {
                                        return < PlayerEmptyCard index={i} showDraftButtonOnClick={showDraftButtonClick} />
                                    } else {
                                        return < PlayerCard character={character} handleClick={(char, ind) => console.log("here")} index={0} />
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