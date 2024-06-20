import React, { createContext, useState, ReactNode, useContext } from 'react';
import mockUser from '../mocks/mockUser';
import { findCharactersByIds } from '../utils/getCharacter'
import { Character } from 'models/Character';

interface DraftContextProps {
    team: Character[];
    leader: Character;
    // addPlayer: (player: Player) => void;
}

const DraftContext = createContext<DraftContextProps | undefined>(undefined);

const DraftProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [leader, setLeader] = useState<Character>(mockUser.leader);
    const [team, setTeam] = useState<Character[]>(mockUser.team);

    // const addPlayer = (player: Player) => {
    //     setPlayers([...players, player]);
    // };

    return (
        <DraftContext.Provider value={{ leader, team }}>
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