import { Character } from '../../models/Character';

export const charactersList: Character[] = [
        {
            id: "beth001",
            characterBaseId: "beth",
            season: "tdi",
            overallRating: 70
        },
        {
            id: "bridgette002",
            characterBaseId: "bridgette",
            season: "tdi",
            overallRating: 75
        },
        {
            id: "cody003",
            characterBaseId: "cody",
            season: "tdi",
            overallRating: 75
        },
        {
            id: "courtney004",
            characterBaseId: "courtney",
            season: "tdi",
            overallRating: 85
        },
        {
            id: "duncan005",
            characterBaseId: "duncan",
            season: "tdi",
            overallRating: 90
        },
        {
            id: "eva006",
            characterBaseId: "eva",
            season: "tdi",
            overallRating: 65
        },
        {
            id: "ezekiel007",
            characterBaseId: "ezekiel",
            season: "tdi",
            overallRating: 60
        },
        {
            id: "geoff008",
            characterBaseId: "geoff",
            season: "tdi",
            overallRating: 70
        },
        {
            id: "gwen009",
            characterBaseId: "gwen",
            season: "tdi",
            overallRating: 80
        },
        {
            id: "harold010",
            characterBaseId: "harold",
            season: "tdi",
            overallRating: 75
        },
        {
            id: "heather011",
            characterBaseId: "heather",
            season: "tdi",
            overallRating: 95
        },
        {
            id: "izzy012",
            characterBaseId: "izzy",
            season: "tdi",
            overallRating: 70
        },
        {
            id: "justin013",
            characterBaseId: "justin",
            season: "tdi",
            overallRating: 65
        },
        {
            id: "katie014",
            characterBaseId: "katie",
            season: "tdi",
            overallRating: 55
        },
        {
            id: "lindsay015",
            characterBaseId: "lindsay",
            season: "tdi",
            overallRating: 60
        },
        {
            id: "noah016",
            characterBaseId: "noah",
            season: "tdi",
            overallRating: 70
        },
        {
            id: "owen017",
            characterBaseId: "owen",
            season: "tdi",
            overallRating: 85
        },
        {
            id: "sadie018",
            characterBaseId: "sadie",
            season: "tdi",
            overallRating: 55
        },
        {
            id: "trent019",
            characterBaseId: "trent",
            season: "tdi",
            overallRating: 75
        },
        {
            id: "tyler020",
            characterBaseId: "tyler",
            season: "tdi",
            overallRating: 65
        }
];

export const charactersIDList = (): string[] => {
    return charactersList.map(character => character.id);
}