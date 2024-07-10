import {useParams} from "react-router-dom";
import {useEffect} from "react";
import { useAppDispatch, useAppSelector} from "../../shared/redux";
import fetchCharacter from "./api/fetchCharacter.ts";
import {Loading,Error,CardTable} from "../../shared/ui";
import {STATUS} from "../../shared/enums";

export const InfoPage = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const { card, status, error } = useAppSelector((state) => state.character);

    useEffect(() => {
        dispatch(fetchCharacter(id))
    }, [dispatch,id]);

    const disabledFields = ['id', 'created', 'edited','url']
    const arrayFields = ['films', 'species', 'vehicle', 'starships']
    const dateFields = ['created', 'edited']

    if (status === STATUS.LOADING) return <Loading/>;

    if (status === STATUS.ERROR) return <Error message={error || 'An unknown error occurred'}/>;

    if (id) return (
        <main className='min-h-[100vh] bg-swBlue p-3 '>
            {card && <CardTable
                dateFields={dateFields}
                arrayFields={arrayFields}
                disabledFields={disabledFields}
                {...card}
                id={id}/>}
        </main>
    )
}