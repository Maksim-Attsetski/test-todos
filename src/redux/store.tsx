import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {todoSliceReducer} from "./slices/todosSlice";
import {langSliceReducer} from "./slices/langSlice";
import {weatherApi} from "./async/weatherApi";

export const rootReducer = combineReducers({
    todos: todoSliceReducer,
    lang: langSliceReducer,
    [weatherApi.reducerPath]: weatherApi.reducer
})

export const setupStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            weatherApi.middleware
        ),
})

export type reducerType = ReturnType<typeof rootReducer>
export type storeType = typeof setupStore;
export type dispatchType = storeType['dispatch']