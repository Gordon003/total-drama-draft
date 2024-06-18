import { CharacterBase } from '../../models/CharacterBase';

const charactersBaseList: CharacterBase[] = [
    {
        id: "heather",
        name: "Heather",
        like: [],
        dislike: [],
        gender: "female",
        image: "heather.png",
        description: "Heather is a tough women"
    },
    {
        id: "duncan",
        name: "Duncan",
        like: [],
        dislike: ["heather"],
        gender: "male",
        image: "heather.png",
        description: "Duncan is a tough men"
    }
];

export default charactersBaseList;