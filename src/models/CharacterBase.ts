export interface CharacterBase {
    id: string;
    name: string;
    like: number[];
    dislike: string[];
    gender: string;
    image: string;
    description: string;
    special?: string;
}