
import { charactersIDList } from '../assets/data/characterList';

export const generateDraft = (): string[] => {

    const charList = charactersIDList();

    // Fisher-Yates Shuffle
    for (let i = charList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charList[i], charList[j]] = [charList[j], charList[i]];
    }

    // Return the first 5 elements after shuffle
    return charList.slice(0, 5);

}