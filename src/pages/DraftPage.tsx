import DraftBoard from 'components/DraftBoard/DraftBoard';
import TeamBoard from 'components/TeamBoard/TeamBoard';
import { DraftProvider } from 'contexts/DraftContext';
import React from 'react';
import './DraftPage.css';

const DraftPage: React.FC = () => {
    // const { addPlayer } = useContext(DraftContext);

    // const handleAddPlayer = () => {
        // Example function to add a player, replace with actual logic
        // const newPlayer = { id: 1, name: 'New Player', description: 'A new player', image: 'path/to/image.jpg' };
        // addPlayer(newPlayer);
    // };

    return (
        <React.StrictMode>
            <DraftProvider>
                <div className="draft-page">
                {/* <button onClick={handleAddPlayer}>Add Player</button> */}
                <TeamBoard />
                </div>
            </DraftProvider>
        </React.StrictMode>
    );
};

export default DraftPage;