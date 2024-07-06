import React from 'react';
import './PlayerCard.css';
interface PlayerEmptyCardProps {
    // character: Character | undefined;
    index: number;
    showDraftButtonOnClick: (index: number) => void;
}

const PlayerEmptyCard: React.FC<PlayerEmptyCardProps> = ({ index, showDraftButtonOnClick }) => {

    return (
        <div className="player-card-div">
            <div className="player-card" onClick={() => showDraftButtonOnClick(index)}>
                <p> ts </p>
            </div>
        </div>
    );
};

export default PlayerEmptyCard;