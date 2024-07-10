import { configureStore,Tuple  } from '@reduxjs/toolkit'
import {useDispatch, useSelector} from 'react-redux'
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
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector = useSelector.withTypes<RootState>()
export type RootState = ReturnType<typeof store.getState>

export default store