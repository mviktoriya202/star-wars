import { createSlice } from '@reduxjs/toolkit';
import {InitialsType} from "../../types/types.ts";
import fetchCharacters from "../../../pages/homePage/api/fetchCharacters.ts";
import {STATUS} from "../../enums/status.ts";


const initialState = {
    cards: [],
    searchString:null,
    status: 'idle',
    error: null,
    page:1,
    total:10
} as InitialsType;

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        },
        changeSearchString: (state, action) => {
            state.searchString = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.cards = action.payload.results.map((item)=>{
                    return { ...item,id:item.url?.match(/\/people\/(\d+)\//)?.[1] || '1'}
                });
                state.total = Math.ceil(action.payload.count / 10 );
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.status = STATUS.ERROR;
                state.error = action.error.message || null;
            });
    },
});
export const {changePage,changeSearchString} = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
