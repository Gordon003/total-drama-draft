import React from 'react';
import { CharacterBase } from 'models/CharacterBase';
import { Character } from 'models/Character';
import { findCharacterBaseById } from 'utils/getCharacter';
import './PlayerCard.css';

interface PlayerCardProps {
    character: Character
    handleClick: (index: number) => void
    index: number
}

const PlayerCard: React.FC<PlayerCardProps> = ({ character, handleClick, index }) => {
    let characterBase: CharacterBase;
    let imgSrc: string = "";
    
    characterBase = findCharacterBaseById(character.characterBaseId) as CharacterBase;
    imgSrc = `/images/charicon/${characterBase?.image}`;

    const charRating = character.overallRating;
    const getBackgroundColor = (): string => {
        if (charRating >= 75) {
            return '#FFD700';
        } else if (charRating >= 60) {
            return '#C0C0C0';
        } else {
            return '#CD7F32';
        }
    };

    return (
        <div className="player-card-div" style={{backgroundColor: getBackgroundColor()}} onClick={() => handleClick(index)}>
            <div>
                <img src={imgSrc} style={{ maxWidth: '100%', height: '40%' }} />
                <h2> {characterBase?.name} {character.overallRating} </h2>
            </div>
        </div>
    );
};

export default PlayerCard;