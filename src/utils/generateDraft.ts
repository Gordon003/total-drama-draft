
import { charactersIDList } from '../assets/data/characterList';

export const generateDraft = (leader: string, team: string[]): string[] => {

    let charList = charactersIDList();
    charList = charList.filter(item => !team.includes(item))
    charList = charList.filter(item => item !== leader);

    // Fisher-Yates Shuffle
    for (let i = charList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charList[i], charList[j]] = [charList[j], charList[i]];
    }

    // Return the first 5 elements after shuffle
    return charList.slice(0, 5);

}