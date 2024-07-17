import React from 'react';
import './PlayerCard.css';
interface PlayerEmptyCardProps {
    // character: Character | undefined;
    index: number;
    handleClick: (index: number) => void;
}

const PlayerEmptyCard: React.FC<PlayerEmptyCardProps> = ({ index, handleClick }) => {

    const handleClickFnc = () => {
        handleClick(index)
    }

    return (
        <div className="player-card-div">
            <div className="player-card" onClick={handleClickFnc}>
                <p> Empty Contestant </p>
            </div>
        </div>
    );
};

export default PlayerEmptyCard;