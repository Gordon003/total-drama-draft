import { Character } from '../../models/Character';

export const charactersList: Character[] = [
    {
        id: "cody001",
        characterBaseId: "cody",
        season: "tdi",
        overallRating: 90,
        physicalRating: 30,
        enduranceRating: 40,
        determinationRating: 60,
        teamworkRating: 50,
        inteligenceRating: 30,
        popularityRating: 50
    },
    {
        id: "courtney001",
        characterBaseId: "courtney",
        season: "tdi",
        overallRating: 90,
        physicalRating: 30,
        enduranceRating: 40,
        determinationRating: 60,
        teamworkRating: 50,
        inteligenceRating: 30,
        popularityRating: 50
    },
    {
        id: "dawn001",
        characterBaseId: "dawn",
        season: "tdroti",
        overallRating: 90,
        physicalRating: 30,
        enduranceRating: 40,
        determinationRating: 60,
        teamworkRating: 50,
        inteligenceRating: 30,
        popularityRating: 50
    },
    {
        id: "heather001",
        characterBaseId: "heather",
        season: "tdi",
        overallRating: 90,
        physicalRating: 30,
        enduranceRating: 40,
        determinationRating: 60,
        teamworkRating: 50,
        inteligenceRating: 30,
        popularityRating: 50
    },
    {
        id: "noah001",
        characterBaseId: "noah",
        season: "tdi",
        overallRating: 90,
        physicalRating: 30,
        enduranceRating: 40,
        determinationRating: 60,
        teamworkRating: 50,
        inteligenceRating: 30,
        popularityRating: 50
    },
    {
        id: "tyler001",
        characterBaseId: "tyler",
        season: "tdi",
        overallRating: 90,
        physicalRating: 30,
        enduranceRating: 40,
        determinationRating: 60,
        teamworkRating: 50,
        inteligenceRating: 30,
        popularityRating: 50
    }
];

export const charactersIDList = (): string[] => {
    return charactersList.map(character => character.id);
}