import DraftBoard from 'components/DraftBoard/DraftBoard';
import TeamBoard from 'components/TeamBoard/TeamBoard';
import { DraftProvider } from 'contexts/DraftContext';
import React, { useContext } from 'react';
import { useDraft } from '../contexts/DraftContext';
import './DraftPage.css';

const DraftPage: React.FC = () => {

    return (
        <React.StrictMode>
            <DraftProvider>
                <div className="draft-page">
                {/* <button onClick={handleAddPlayer}>Add Player</button> */}
                    <TeamBoard/>
                </div>
            </DraftProvider>
        </React.StrictMode>
    );
    
};

export default DraftPage;