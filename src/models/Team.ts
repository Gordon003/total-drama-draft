import { Character } from './Character';

export interface Team {
    id: string;
    name: string;
    leader: Character;
    member: Character[];
}