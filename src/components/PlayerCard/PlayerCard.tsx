import React from 'react';
import { Player } from '../../models/Player';
import './PlayerCard.css';

interface PlayerCardProps {
    player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
    return (
        <div className="player-card">
            <img src={player.image} alt={player.name} />
            <h3>{player.name}</h3>
            <p>{player.description}</p>
        </div>
    );
};

export default PlayerCard;