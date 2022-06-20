import React, {FC, useEffect, useMemo} from 'react';
import {Col, Row} from "antd";
import IsLoading from "./H-O-C/isLoading";
import {useTypedSelector} from "../hooks/redux";
import {weatherApi} from "../redux/async/weatherApi";
import {weatherFormKelvinToCelsius} from "../helpers/weatherFormKelvinToCelsius";
import {getDate} from "../helpers/getDate";

const TodayWeather: FC = () => {
    const {lang} = useTypedSelector(state => state.lang)
    const {data: todayWeather, isLoading, isError} = weatherApi.useGetCurrentWeatherQuery(1)
    //         const sunTime = response.city.sunrise
    //         const date = new Date(sunTime)
    //         console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

    useEffect(() => {
        if (!todayWeather) return
        console.log(todayWeather)
    }, [isLoading])

    const feelLikes: number = useMemo(() => weatherFormKelvinToCelsius(todayWeather?.main?.feels_like), [todayWeather])
    const sunRise: string = useMemo(() => getDate(todayWeather?.sys?.sunrise), [todayWeather])
    const sunSet: string = useMemo(() => getDate(todayWeather?.sys?.sunset), [todayWeather])

    return (
        <IsLoading isError={isError} isLoading={isLoading}>
            <div>
                {todayWeather &&
                    <Row gutter={[16, 16]}>
                        <Col>{todayWeather?.name}, {todayWeather?.sys?.country}</Col>
                        <Col>{lang.clouds} — {todayWeather?.clouds?.all}%</Col>
                        <Col>Чувствуется как {feelLikes} °C</Col>
                        <Col>Восход {sunRise}</Col>
                        <Col>Закат {sunSet}</Col>

                        <Col>{JSON.stringify(todayWeather)}</Col>
                    </Row>}
            </div>
        </IsLoading>
    );
};

export default TodayWeather;