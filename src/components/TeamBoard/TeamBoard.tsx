import React from 'react';
import { useDraft } from '../../contexts/DraftContext';
import PlayerCard from '../PlayerCard/PlayerCard';
import PlayerEmptyCard from 'components/PlayerCard/PlayerEmptyCard';
import './TeamBoard.css';

const TeamBoard: React.FC = () => {
    const { leader, team } = useDraft();

    return (
        <div className="team-board">
            <div className="team-board-div">
                <table className="team-board-table">
                    <tbody>
                        <tr>
                            <td style={{width: '20%', backgroundColor: 'blue'}}>
                                {leader && <PlayerCard character={leader} />}
                                {typeof leader === 'undefined' && <PlayerEmptyCard />}
                            </td>
                            <td style={{ width: '80%', backgroundColor: 'red'}}>
                                <div className="character-board">
                                    {team.map(function (character, i) {
                                        if (typeof character === 'undefined') {
                                            return < PlayerEmptyCard />
                                        } else {
                                            return < PlayerCard character={character} />
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