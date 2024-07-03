import React, { createContext, useState, ReactNode, useContext } from 'react';
import mockUser from '../mocks/mockUser';
import { findCharactersByIds } from '../utils/getCharacter'
import mockDraftTeam from 'mocks/mockDraftTeam';
import { Character } from 'models/Character';

interface DraftContextProps {
    team: (Character|undefined)[];
    leader: Character|undefined;
    DRAFTTIME: boolean,
    addPlayer: (character: Character, index: number) => void;
    SETDRAFTTIME: React.Dispatch<React.SetStateAction<boolean>>
    setCardIndex: React.Dispatch<React.SetStateAction<number>>
}

const DraftContext = createContext<DraftContextProps | undefined>(undefined);

const DraftProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [leader, setLeader] = useState(undefined);
    const [team, setTeam] = useState(findCharactersByIds(mockDraftTeam));
    const [DRAFTTIME, SETDRAFTTIME] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);

    const addPlayer = (character: Character): void => {
        setTeam(team.map((char, ind) => (ind === cardIndex ? character : char)));
    }; 

    return (
        <DraftContext.Provider value={{ leader, team, DRAFTTIME, addPlayer, SETDRAFTTIME, setCardIndex }}>
            {children}
        </DraftContext.Provider>
    );
};

const useDraft = (): DraftContextProps => {
    const context = useContext(DraftContext);
    if (!context) {
        throw new Error('useDraft must be used within a DraftProvider');
    }
    return context;
};


export { DraftProvider, useDraft };