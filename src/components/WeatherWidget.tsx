import React, {FC, useEffect, useMemo} from 'react';
import {useTypedSelector} from "../hooks/redux";
import {weatherApi} from "../redux/async/weatherApi";
import IsLoading from "./H-O-C/isLoading";
import {Col, Row} from "antd";

const WeatherWidget: FC = () => {
    const {lang} = useTypedSelector(state => state.lang)
    const {data: todayWeather, isLoading, isError} = weatherApi.useGetCurrentWeatherQuery(1)
    const {data: futureWeather, isLoading: loading, isError: error} = weatherApi.useGetFutureWeatherQuery(1)
    //         const sunTime = response.city.sunrise
    //         const date = new Date(sunTime)
    //         console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

    const isCurrentLoading: boolean = useMemo(() => {
        return isLoading && loading
    }, [isLoading])
    const isCurrentError: boolean = useMemo(() => {
        return isError && error
    }, [isError])

    useEffect(() => {
        if (!todayWeather && !futureWeather) return
        console.log(todayWeather)
        console.log(futureWeather)
    }, [isCurrentLoading])


    return (
        <IsLoading isError={isCurrentError} isLoading={isCurrentLoading}>
            <div>
                {todayWeather &&
                    <Row gutter={[16, 16]}>
                        <Col>{todayWeather?.name}</Col>
                        <Col>{todayWeather?.clouds?.all}%</Col>
                        <Col>{JSON.stringify(todayWeather)}</Col>
                    </Row>}
            </div>
        </IsLoading>
    );
};

export default WeatherWidget;