import { Character } from './Character';

export interface MockTeam {
    id: string;
    name: string;
    leader: Character|undefined;
    member: (Character|undefined)[];
}