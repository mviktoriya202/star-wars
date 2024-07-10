import {createSlice} from '@reduxjs/toolkit';
import fetchCharacter from "../../../pages/infoPage/api/fetchCharacter.ts";
import {CardType} from "../../types/types.ts";
import {STATUS} from "../../enums";

type InitialTypes = {
    id: null | number,
    card:CardType | null,
    status:null | string,
    error:null | string
}

const initialState:InitialTypes = {
    id: null,
    card:null,
    status:null,
    error:null,
}

const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacter.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchCharacter.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.card = action.payload;
            })
            .addCase(fetchCharacter.rejected, (state, action) => {
                state.status = STATUS.ERROR;
                state.error = action.error.message || null;
            });
    },
});
export const characterReducer = characterSlice.reducer;
