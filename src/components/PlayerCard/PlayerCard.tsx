import React from 'react';
import { Player } from '../../models/Player';
import './PlayerCard.css';

interface PlayerCardProps {
    player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
    return (
        <div className="player-card">
            <p> test </p>
        </div>
    );
};

export default PlayerCard;