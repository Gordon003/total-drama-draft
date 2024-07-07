export interface CharacterBase {
    id: string;
    name: string;
    like: number[];
    dislike: string[];
    gender: 'male'|'female';
    image: string;
    description: string;
    special?: string;
}