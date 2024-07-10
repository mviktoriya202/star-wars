import {ICardContainer} from "../../../shared/types";
import {Box, Pagination, Typography} from "@mui/material";
import { useAppDispatch, useAppSelector} from "../../../shared/redux";
import {ChangeEvent} from "react";
import {Loading,Error,Card} from "../../../shared/ui";
import {STATUS} from "../../../shared/enums";
import {changePage} from "../../../shared/redux";

export const CardsContainer = ({cards, error, status}: ICardContainer) => {
    const dispatch = useAppDispatch();
    const {page,total} = useAppSelector((state) => state.characters);
    const handleChangePage = (_: ChangeEvent<unknown>, value: number) => {
        dispatch(changePage(value))
    }
    if (status === STATUS.LOADING) return <Loading/>;

    if (status === STATUS.ERROR) return <Error message={error || 'An unknown error occurred'}/>;
    return (
        <main className='bg-swBlue'>
            <Typography variant='h4' className="text-center text-white text-3xl font-bold  pt-4 mb-4">Star Wars
                Characters</Typography>

            <Box className='p-3 flex flex-wrap items-center justify-between gap-4'>
                {cards.map((character) => (
                    <Card key={character.name} {...character}/>
                ))}
            </Box>
            <Box className="flex justify-center mt-4 p-4 bg-swGold">
                <Pagination
                    count={total}
                    page={page}
                    onChange={handleChangePage}
                    color="primary"
                />
            </Box>
        </main>
    )
}