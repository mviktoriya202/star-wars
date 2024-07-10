import {CardType} from "../types/types.ts";

export const mergeCardsData = (cards: CardType[], cardsData: CardType[]): CardType[] => {
    return cards.map(card => {
        const existingCardData = cardsData.find(data => data.id == card.id);
        return existingCardData ? {...card, ...existingCardData} : card;
    });
};