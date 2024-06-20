import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Player } from '../models/User';
import mockPlayers from '../mocks/mockPlayers';
import mockTeam from '../mocks/mockTeam';
import { findCharactersByIds } from '../utils/getCharacter'
import { Character } from 'models/Character';

interface DraftContextProps {
    players: Player[];
    team: Character[];
    // addPlayer: (player: Player) => void;
}

const DraftContext = createContext<DraftContextProps | undefined>(undefined);

const DraftProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // const [players, setPlayers] = useState<Player[]>([]);
    const [players, setPlayers] = useState<Player[]>([]);
    const [team, setTeam] = useState<Character[]>(findCharactersByIds(mockTeam));

    // const addPlayer = (player: Player) => {
    //     setPlayers([...players, player]);
    // };

    console.log("here", team)

    return (
        <DraftContext.Provider value={{ players: players, team: team }}>
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