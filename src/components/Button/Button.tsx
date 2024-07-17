// BigRedButton.tsx
import React from 'react';
import './Button.css';

interface GameButtonProps {
    text: string;
    onClick: () => void;
}

const GameButton: React.FC<GameButtonProps> = ({ text, onClick }) => {

    let bgColor: string;
    if (text === "RESTART TEAM") {
        bgColor = 'red'
    } else {
        bgColor = 'green'
    }

    return (
        <button className="game-button" style={{backgroundColor:bgColor}} onClick={onClick}>
            {text}
        </button>
    );
};

export default GameButton;