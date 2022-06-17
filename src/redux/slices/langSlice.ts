import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import lang from '../../assets/lang/translation.json';

interface IState {
    lang: any,
}

const initialState: IState = {
    lang: lang['ru'],
}

const langSlice = createSlice({
    name: 'langSlice',
    initialState,
    reducers: {
        changeLang: (state, action: PayloadAction<string>) => {
            // @ts-ignore
            state.lang = lang[action.payload]
        }
    }
})

export const langSliceActions = langSlice.actions
export const langSliceReducer = langSlice.reducer
