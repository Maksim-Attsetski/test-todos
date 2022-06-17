import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/redux";
import {weatherApi} from "../redux/async/weatherApi";
import IsLoading from "./H-O-C/isLoading";
import {Col, Row} from "antd";

const FutureWeather: FC = () => {
    const {lang} = useTypedSelector(state => state.lang)
    const {data: futureWeather, isLoading, isError} = weatherApi.useGetFutureWeatherQuery(1)
    //         const sunTime = response.city.sunrise
    //         const date = new Date(sunTime)
    //         console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

    useEffect(() => {
        if (!futureWeather) return
        console.log(futureWeather)
    }, [isLoading])

    return (
        <IsLoading isError={isLoading} isLoading={isError}>
            <div>
                {futureWeather &&
                    <Row gutter={[16, 16]}>
                        <Col>{futureWeather?.name}</Col>
                        <Col>{futureWeather?.clouds?.all}%</Col>
                        <Col>{JSON.stringify(futureWeather)}</Col>
                    </Row>}
            </div>
        </IsLoading>
    );
};

export default FutureWeather;