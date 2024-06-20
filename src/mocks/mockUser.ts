import { User } from '../models/User';
import { findCharactersByIds, findCharacterById } from '../utils/getCharacter';
import { Character } from 'models/Character';
import mockTeam from './mockUserTeam';

const mockUserFromDB = {
    id: '001',
    username: 'gordon003',
    teamname: 'gordon003 team',
    leader: 'heather001',
    team: mockTeam
}

const mockUser: User = {
    id: mockUserFromDB.id,
    username: mockUserFromDB.username,
    teamname: mockUserFromDB.teamname,
    leader: findCharacterById(mockUserFromDB.leader) as Character,
    team: findCharactersByIds(mockTeam) as Character[]
}

export default mockUser;