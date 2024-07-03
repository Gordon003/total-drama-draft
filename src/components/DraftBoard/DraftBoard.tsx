import React, { useState } from 'react';
import { useDraft } from '../../contexts/DraftContext';
import PlayerCard from '../PlayerCard/PlayerCard';
import PlayerEmptyCard from 'components/PlayerCard/PlayerEmptyCard';
import './DraftBoard.css';
import { Character } from 'models/Character';
import mockDraft from 'mocks/mockDraft';
import { findCharactersByIds } from 'utils/getCharacter';

interface DraftBoardProps {
}

const DraftBoard: React.FC<DraftBoardProps> = () => {
    const { addPlayer, SETDRAFTTIME} = useDraft();

    const [team, setTeam] = useState(findCharactersByIds(mockDraft) as Character[]);

    const handleClick = (character: Character, index: number): void => {
        console.log("hereww")
        console.log("character", character, index)
        addPlayer(character, index);
        SETDRAFTTIME(false);
    }

    return (
        <div className="draft-board">
            <h1> Choose your contestant! </h1>
            <table className="draft-board-table">
                <tr>
                    {team.map(function (character, i) {
                        return <td className='draft-board-table-card'>< PlayerCard key={i} character={character} handleClick={handleClick} index={i}/> </td>
                    })}
                </tr>
            </table>
        </div>
    );
};

export default DraftBoard