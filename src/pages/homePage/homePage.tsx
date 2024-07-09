import {CardsContainer} from "../../widgets/cards/ui/CardsContainer.tsx";
import {useEffect, useState} from "react";
import {RootState, useAppDispatch} from "../../shared/redux/store.ts";
import { useSelector} from "react-redux";
import fetchCharacters from "./api/fetchCharacters.ts";
import {CardType} from "../../shared/types/types.ts";
import {getCardsDataFromLocalStorage} from "../../shared/utils";

export const HomePage = ()=>{
    const dispatch = useAppDispatch();
    const { cards, searchString, status, page, error } = useSelector((state: RootState) => state.characters);
    const [filteredCardsData, setFilteredCardsData] = useState<CardType[]>([]);


    const mergeCardsData = (cards: CardType[], cardsData: CardType[]): CardType[] => {
        const updatedCards = cards.map(card => {
            const existingCardData = cardsData.find(data => data.id == card.id);
            return existingCardData ? { ...card, ...existingCardData } : card;
        });
        return updatedCards;
    };

    useEffect(() => {
        dispatch(fetchCharacters({page, search: searchString || ''}));
    }, [dispatch, page, searchString]);

    useEffect(() => {
        const cardsData = getCardsDataFromLocalStorage();
        const updatedCards = mergeCardsData(cards, cardsData);
        setFilteredCardsData(updatedCards);
    }, [cards]);

    return(
        <div>
            <CardsContainer cards={filteredCardsData} status={status} error={error} />
        </div>
    )
}
