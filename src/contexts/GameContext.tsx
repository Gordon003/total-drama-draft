import React, { createContext, useState, ReactNode } from 'react';
// import { Player } from '../models/Player';

interface GameContextProps {
    // players: Player[];
    // addPlayer: (player: Player) => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // const [players, setPlayers] = useState<Player[]>([]);

    // const addPlayer = (player: Player) => {
    //     setPlayers([...players, player]);
    // };

    return (
        <GameContext.Provider value={{ }}>
            {children}
        </GameContext.Provider>
    );
};

export { GameContext, GameProvider };