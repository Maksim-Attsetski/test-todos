import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import lang from '../../assets/lang/translation.json';

interface IState {
    lang: any,
}

const langFromLS: string = localStorage.getItem('lang') || 'ru'

const initialState: IState = {
// @ts-ignore
    lang: lang[langFromLS],
}

const langSlice = createSlice({
    name: 'langSlice',
    initialState,
    reducers: {
        changeLang: (state, action: PayloadAction<string>) => {
            // @ts-ignore
            state.lang = lang[action.payload]
            localStorage.setItem('lang', action.payload)
        }
    }
})

export const langSliceActions = langSlice.actions
export const langSliceReducer = langSlice.reducer
