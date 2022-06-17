

export interface ITodo {
    id: string,
    createdAt: string,
    title: string,
    tasks: ITask[],
    isDone: boolean,
}

export interface ITask {
    isDone: boolean,
    text: string,
}