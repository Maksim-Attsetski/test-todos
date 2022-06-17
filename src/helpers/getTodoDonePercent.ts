import {ITodo} from "../types/global";


export const getTodoDonePercent = (todos: ITodo[]): number => {
    const doneTodo: ITodo[] = todos.filter((todo: ITodo) => todo.isDone)

    return Math.ceil((doneTodo.length / todos.length) * 100)
}