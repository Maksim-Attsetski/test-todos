

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

export interface IWeather {
    clouds: number,
    date: string,
    icon: string,
    feelLike: number,
    temp: number,
    maxTemp: number,
    minTemp: number,
    windSpeed: number,
    windDir: string,
}