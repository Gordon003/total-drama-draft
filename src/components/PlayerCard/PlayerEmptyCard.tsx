import React from 'react';
import './PlayerCard.css';

interface PlayerCardProps {
    // character: Character | undefined;
}

const PlayerEmptyCard: React.FC<PlayerCardProps> = ({ }) => {

    return (
        <div className="player-card" style={{ backgroundColor: 'yellow' }}>
            <p> Empty </p>
        </div>
    );
};

export default PlayerEmptyCard;