import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./consts.ts";
import { CardType } from "../../../shared/types/types.ts";


const fetchCharacter: AsyncThunk<CardType, string | undefined, object> = createAsyncThunk(
    'characters/fetchCharacter',
    async (id:string | undefined) => {
        const response = await fetch(`${API}/people/${id}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    }
);

export default fetchCharacter;
