import React from 'react';
import { useDraft } from '../../contexts/DraftContext';
import PlayerCard from '../PlayerCard/PlayerCard';
import './DraftBoard.css';

const DraftBoard: React.FC = () => {
    const { players, team } = useDraft();

    return (
        <div className="draft-board">
            {team.map(character => (
                <PlayerCard character={character} />
            ))}
        </div>
    );
};

export default DraftBoard