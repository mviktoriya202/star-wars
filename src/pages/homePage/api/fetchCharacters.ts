import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./consts.ts";
import {CharactersResultType} from "../../../shared/types/types.ts";

type ArgsType = { page?: number, search?: string };

const fetchCharacters: AsyncThunk<CharactersResultType, ArgsType, object> = createAsyncThunk(
    'characters/fetchCharacters',
    async (params: ArgsType) => {
        const queryParams: Record<string, string> = {};
        if (params.page !== undefined) queryParams.page = params.page.toString();
        if (params.search !== undefined) queryParams.search = params.search;

        const queryString = new URLSearchParams(queryParams).toString();
        const response = await fetch(`${API}/people/?${queryString}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    }
);

export default fetchCharacters;
