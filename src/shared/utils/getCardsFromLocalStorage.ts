import {CardType} from "../types/types.ts";

export  const getCardsDataFromLocalStorage = (): CardType[] => {
    const data = localStorage.getItem('cardsData');
    return data ? JSON.parse(data) : [];
};