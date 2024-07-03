import React from 'react';
import { CharacterBase } from 'models/CharacterBase';
import { Character } from 'models/Character';
import { findCharacterBaseById } from 'utils/getCharacter';
import './PlayerCard.css';

interface PlayerCardProps {
    character: Character;
    handleClick: (character: Character, index: number) => void;
    index: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ character, handleClick, index }) => {
    let characterBase: CharacterBase|undefined;
    let imgSrc: string = "";
    
    if (typeof character !== "undefined"){
        characterBase = findCharacterBaseById(character.characterBaseId);
        imgSrc = `/images/charicon/${characterBase?.image}`;
    }

    return (
        <div className="player-card" onClick={() => handleClick(character, index)}>
            {characterBase && character && (
                <>
                <img src={imgSrc} style={{ maxWidth: '100%' }} />
                <h2> {characterBase?.name} {character.overallRating} </h2>
                <table width='80%'>
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
                </>
            )}
        </div>
    );
};

export default PlayerCard;