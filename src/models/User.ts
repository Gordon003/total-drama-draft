import {Character} from './Character'

export interface User {
    id: string;
    username: string;
    teamname: string;
    leader: Character;
    team: Character[];
}