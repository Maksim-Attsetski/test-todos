import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const key = 'a94d0a5ac08570add4b47b8da933f247'
const baseUrl = 'https://api.openweathermap.org/data/2.5/'
const currentWeatherUrl = `weather?q=Minsk&appid=${key}`
const futureWeatherUrl = `forecast?q=Minsk&appid=${key}`

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['CurrentWeather', 'FutureWeather'],
    endpoints: (build) => ({
        getCurrentWeather: build.query({
            query: () => currentWeatherUrl,
            providesTags: result => ['CurrentWeather'],
        }),
        getFutureWeather: build.query({
            query: () => futureWeatherUrl,
            providesTags: result => ['FutureWeather'],
        }),
    })
})

