import React, { useContext } from 'react';
import { useDraft } from '../../contexts/DraftContext';
import PlayerCard from '../PlayerCard/PlayerCard';

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