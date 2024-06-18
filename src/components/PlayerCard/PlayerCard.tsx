import React from 'react';
import { CharacterBase } from 'models/CharacterBase';
import { Character } from 'models/Character';
import { findCharacterBaseById } from 'utils/getCharacter';
import './PlayerCard.css';
import '../../assets/images/charicon/heather.png'

interface PlayerCardProps {
    character: Character;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ character }) => {
    const characterBase = findCharacterBaseById(character.characterBaseId);
    const imgSrc = `/images/charicon/${characterBase?.image}` || "/images/charicon/heather.png";
    console.log("here", imgSrc)
    return (
        <div className="player-card">
            <p> {characterBase?.name} </p>
            <img src={imgSrc} />
        </div>
    );
};

export default PlayerCard;