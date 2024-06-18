import DraftBoard from 'components/DraftBoard/DraftBoard';
import { DraftProvider } from 'contexts/DraftContext';
import React from 'react';

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
                            <h2>Draft Your Players</h2>
                {/* <button onClick={handleAddPlayer}>Add Player</button> */}
                <DraftBoard />
                </div>
            </DraftProvider>
        </React.StrictMode>
    );
};

export default DraftPage;