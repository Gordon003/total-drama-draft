import React from 'react';
import './PlayerCard.css';
import { Character } from 'models/Character';

interface PlayerEmptyCardProps {
    // character: Character | undefined;
    index: number;
    showDraftButtonOnClick: (index: number) => void;
}

const PlayerEmptyCard: React.FC<PlayerEmptyCardProps> = ({ index, showDraftButtonOnClick }) => {

    return (
        <div className="player-card" style={{ backgroundColor: 'yellow' }}>
            <div key={index} onClick={() => showDraftButtonOnClick(index)}>
                <p> Empty </p>
            </div>
        </div>
    );
};

export default PlayerEmptyCard;