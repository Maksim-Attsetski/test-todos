import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../../types/global";

interface IState {
    todos: ITodo[]

}

const initialState: IState = {
    todos: []
}

const setLocStorage = (item: ITodo[] | ITodo) => localStorage.setItem('todos', JSON.stringify(item))

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        getTodos: (state) => {
            const todosData: string | null = localStorage.getItem('todos')
            if (todosData) {
                state.todos = JSON.parse(todosData)
                setLocStorage(state.todos)
            }
        },
        createTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos = [...state.todos, action.payload]
            setLocStorage(state.todos)
        },
        changeTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos = [...state.todos].map((todo: ITodo) =>
                (action.payload.id === todo.id) ? action.payload : todo
            )
            setLocStorage(state.todos)
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = [...state.todos]
                .filter((todo: ITodo) => todo.id !== action.payload)
            setLocStorage(state.todos)
        },
    }
})

export const todoSliceAction = todosSlice.actions
export const todoSliceReducer = todosSlice.reducer