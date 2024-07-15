export interface CharacterBase {
    id: string;
    name: string;
    like: string[];
    dislike: string[];
    gender: 'male'|'female';
    image: string;
    description: string;
    special?: string;
}