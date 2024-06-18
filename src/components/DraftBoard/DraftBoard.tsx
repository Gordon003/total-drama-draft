import React from 'react';
import { useDraft } from '../../contexts/DraftContext';
import PlayerCard from '../PlayerCard/PlayerCard';
import './DraftBoard.css';

const DraftBoard: React.FC = () => {
    const { players } = useDraft();

    return (
        <div className="draft-board">
            {players.map(player => (
                <PlayerCard key={player.id} player={player} />
            ))}
        </div>
    );
};

export default DraftBoard