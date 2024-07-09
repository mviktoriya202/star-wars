import {InitialsType} from "../../../shared/types/types.ts";
import {Box, Pagination, Typography} from "@mui/material";
import {RootState, useAppDispatch} from "../../../shared/redux/store.ts";
import {useSelector} from "react-redux";
import {ChangeEvent} from "react";
import {Loading,Error,Card} from "../../../shared/ui";
import {changePage} from "../../../shared/redux";
import {STATUS} from "../../../shared/enums/status.ts";

export const CardsContainer = ({cards, error, status}: Omit<InitialsType, 'page'>) => {
    const dispatch = useAppDispatch();
    const {page,total} = useSelector((state: RootState) => state.characters);
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