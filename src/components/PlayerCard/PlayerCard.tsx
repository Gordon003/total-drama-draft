import React from 'react';
import { CharacterBase } from 'models/CharacterBase';
import { Character } from 'models/Character';
import { findCharacterBaseById } from 'utils/getCharacter';
import './PlayerCard.css';

interface PlayerCardProps {
    character: Character;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ character }) => {
    const characterBase = findCharacterBaseById(character.characterBaseId);
    const imgSrc = `/images/charicon/${characterBase?.image}`;
    console.log("here", imgSrc)
    return (
        <div className="player-card">
            <img src={imgSrc} />
            <h2> {characterBase?.name} {character.overallRating} </h2>
            <table width='100%'>
                <tbody>
                    <tr>
                        <td>PHY: {character.overallRating}</td>
                        <td>TEAM: {character.teamworkRating}</td>
                    </tr>
                    <tr>
                        <td>END: {character.enduranceRating}</td>
                        <td>INT: {character.inteligenceRating}</td>
                    </tr>
                    <tr>
                        <td>DET: {character.determinationRating}</td>
                        <td>POP: {character.popularityRating}</td>
                    </tr>
                </tbody>
                </table>
        </div>
    );
};

export default PlayerCard;