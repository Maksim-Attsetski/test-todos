import React, {FC, useEffect, useMemo} from 'react';
import {Col, Row} from "antd";
import IsLoading from "./H-O-C/isLoading";
import {useTypedSelector} from "../hooks/redux";
import {weatherApi} from "../redux/async/weatherApi";

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

    return (
        <IsLoading isError={isLoading} isLoading={isError}>
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

export default TodayWeather;