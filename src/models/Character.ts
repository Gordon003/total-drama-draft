export interface Character {
    id: string;
    characterBaseId: string;
    season: string;
    overallRating: number;
    physicalRating: number;
    enduranceRating: number;
    determinationRating: number;
    teamworkRating: number;
    inteligenceRating: number;
    popularityRating: number;
    description?: string;
    image?: string;
    special?: string;
}