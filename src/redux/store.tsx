import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {todoSliceReducer} from "./slices/todosSlice";
import {langSliceReducer} from "./slices/langSlice";

export const rootReducer = combineReducers({
    todos: todoSliceReducer,
    lang: langSliceReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type reducerType = ReturnType<typeof rootReducer>
export type storeType = typeof store
export type dispatchType = storeType['dispatch']