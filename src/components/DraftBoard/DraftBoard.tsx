import React, { useContext, useState } from 'react';
import { useDraftContext } from '../../contexts/DraftContext';
import PlayerCard from '../PlayerCard/PlayerCard';
import './DraftBoard.css';
import { Character } from 'models/Character';
import { findCharactersByIds } from 'utils/getCharacter';
import { generateDraft } from 'utils/generateDraft';

const DraftBoard: React.FC = () => {
    const { draftTeam, cardIndex, updateState } = useDraftContext();

    const [contestantOptions, _] = useState(findCharactersByIds(generateDraft()) as Character[]);

    // select contestant
    const handleClick = (index: number): void => {
        const character = contestantOptions[index] as Character
        updateState({ DRAFTTIME: false, draftTeam: draftTeam.map((char, ind) => (ind === cardIndex ? character.id : char)) });
    }

    return (
        <div className="draft-board">
            <h1> Choose your contestant! </h1>
            <table className="draft-board-table">
                <tr>
                    {contestantOptions.map(function (character, i) {
                        return <td className='draft-board-table-card' key={i}>< PlayerCard key={i} character={character} handleClick={handleClick} index={i}/> </td>
                    })}
                </tr>
            </table>
        </div>
    );
};

export default DraftBoard