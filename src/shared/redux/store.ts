import { configureStore,Tuple  } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { thunk } from 'redux-thunk'
import {charactersReducer,characterReducer} from "./slices";


const store = configureStore({
    reducer: {
        characters:charactersReducer,
        character:characterReducer
    },
    middleware: () => new Tuple(thunk),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>

export default store