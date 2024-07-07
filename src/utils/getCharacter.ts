import { charactersList } from '../assets/data/characterList';
import { Character } from '../models/Character';

import { charactersBaseList } from '../assets/data/charactersBaseList';
import { CharacterBase } from '../models/CharacterBase';


const findCharacterById = (id: string): Character|undefined => {
    return charactersList.find(player => player.id === id)
};

const findCharactersByIds = (ids: string[]): (Character|undefined)[] => {
    var finArr: (Character|undefined)[] = [];
    ids.forEach( id => {
        finArr.push(charactersList.find(player => player.id === id))
    })
    return finArr;
};

const findCharacterBaseById = (id: string): CharacterBase|undefined => {
    return charactersBaseList.find(player => player.id === id)
};

const findCharactersBaseByIds = (ids: string[]): (CharacterBase|undefined)[] => {
    return charactersBaseList.filter(player => ids.includes(player.id));
};

export { findCharacterById, findCharactersByIds, findCharacterBaseById, findCharactersBaseByIds }