export type InitialsType = {
    cards: CardType[],
    status:  'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null,
    page:number,
    searchString?:string | null,
    total?:number,
}
export interface ICardContainer  {
    cards: CardType[],
    status:  'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null,
    searchString?:string | null,
    total?:number,
}
export type CharacterCardProps =  {
    id:string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    url:string;
}

export type CharactersResultType = {
    results:CardType[],
    count:number
}
export type CardType = {
    id:string;
    name: string;
    height: string;
    vehicle: string[];
    films:[];
    species:[];
    starships:[];
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    created: string;
    edited: string;
    url: string;
}