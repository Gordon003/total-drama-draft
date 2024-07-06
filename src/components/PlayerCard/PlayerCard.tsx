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
    let characterBase: CharacterBase;
    let imgSrc: string = "";
    
    characterBase = findCharacterBaseById(character.characterBaseId) as CharacterBase;
    imgSrc = `/images/charicon/${characterBase?.image}`;

    return (
        <div className="player-card-div">
            <div className="player-card" onClick={() => handleClick(character, index)}>
                <img src={imgSrc} style={{ maxWidth: '100%', height: '40%', backgroundColor: 'blue' }} />
                <p style={{backgroundColor: 'purple'}}> {characterBase?.name} {character.overallRating} </p>
                <div className='player-card-table-div'>
                    <table className="player-card-table" style={{ backgroundColor: 'red' }}>
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
            </div>
        </div>
    );
};

export default PlayerCard;