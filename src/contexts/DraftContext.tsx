import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Character } from 'models/Character';
import mockDraftTeam from 'mocks/mockDraftTeam';

interface DraftState {
    draftTeam: string[]
    draftLeader: string
    draftTeamName: string
    DRAFTTIME: boolean
    cardIndex: number
    updateState: (newState: Partial<DraftState>) => void
}

export const initialState: DraftState = {
    draftTeam: mockDraftTeam,
    draftTeamName: "",
    draftLeader: '',
    DRAFTTIME: false,
    cardIndex: 0,
    updateState: () => {}
};

const DraftContext = createContext<DraftState>(initialState);

export const DraftProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [state, setState] = useState(initialState);

    const updateState = (newState: Partial<DraftState>) => {
        setState((prevState) => ({
            ...prevState,
            ...newState,
        }));
    };

    return (
        <DraftContext.Provider value={{ ...state, updateState }}>
            {children}
        </DraftContext.Provider>
    );
};

export const useDraftContext = (): DraftState => {
    const context = useContext(DraftContext);
    if (!context) {
        throw new Error('useDraftContext must be used within a DraftProvider');
    }
    return context;
};