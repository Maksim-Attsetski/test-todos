import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/redux";
import {weatherApi} from "../redux/async/weatherApi";
import IsLoading from "./H-O-C/isLoading";
import {Col, Empty, Row, Typography} from "antd";
import {weatherFormKelvinToCelsius} from "../helpers/weatherFormKelvinToCelsius";
import {getWindDirection} from "../helpers/getWindDirection";
import WeatherWidget from "./WeatherWidget";

const {Title} = Typography

const FutureWeather: FC = () => {
    // const {lang} = useTypedSelector(state => state.lang)
    const {data, isLoading, isError} = weatherApi.useGetFutureWeatherQuery(1)

    return (
        <IsLoading isError={isError} isLoading={isLoading}>
            {data ? <div>
                    <Title level={3}>{data?.city.name}, {data?.city.country}</Title>
                    <Row justify={'space-around'} gutter={
                        [{xs: 8, sm: 16, md: 32, lg: 32},
                            {xs: 8, sm: 16, md: 32, lg: 32}]
                    }>
                        {data.list.map((item: any) => <Col key={item.dt_txt}>
                            <WeatherWidget weather={{
                                temp: weatherFormKelvinToCelsius(item?.main?.temp),
                                feelLike: weatherFormKelvinToCelsius(item?.main?.feels_like),
                                maxTemp: weatherFormKelvinToCelsius(item?.main?.temp_max),
                                minTemp: weatherFormKelvinToCelsius(item?.main?.temp_min),
                                date: item?.dt_txt,
                                icon: `http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`,
                                clouds: item?.clouds?.all,
                                windDir: getWindDirection(item?.wind?.deg),
                                windSpeed: item?.wind?.speed,
                            }}/>
                        </Col>)}
                    </Row>
                </div>
                : <Empty/>}
        </IsLoading>
    );
};

export default FutureWeather;