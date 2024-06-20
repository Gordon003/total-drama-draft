import { User } from '../models/User';
import { findCharactersByIds, findCharacterById } from '../utils/getCharacter';
import mockTeam from './mockTeam';

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
    leader: findCharacterById(mockUserFromDB.leader),
    team: findCharactersByIds(mockTeam)
}

export default mockUser;