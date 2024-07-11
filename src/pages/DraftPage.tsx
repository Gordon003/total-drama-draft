import DraftBoard from 'components/DraftBoard/DraftBoard';
import TeamBoard from 'components/TeamBoard/TeamBoard';
import { useDraftContext } from 'contexts/DraftContext';
import React from 'react';
import './DraftPage.css';

const DraftPage: React.FC = () => {

    const {updateState, DRAFTTIME, draftTeam} = useDraftContext();

    const pickNewContestant = (index: number) => {
        updateState({DRAFTTIME: true, cardIndex: index})
    }

    const selectContestant = (index: number) => {
        console.log(index)
    }

    return (
        <div className="draft-page">
            {DRAFTTIME === true &&
                <div className="draft-board-div">
                    <DraftBoard />
                </div>
            }
            <TeamBoard handlePlayerSelect={selectContestant} handleEmptySelect={pickNewContestant} inputTeam={draftTeam} />
        </div>
    );
    
};

export default DraftPage;