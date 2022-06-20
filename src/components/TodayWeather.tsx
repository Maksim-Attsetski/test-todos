import React, {FC, useMemo} from 'react';
import {Col, Row, Typography} from "antd";
import IsLoading from "./H-O-C/isLoading";
import {weatherApi} from "../redux/async/weatherApi";
import {weatherFormKelvinToCelsius} from "../helpers/weatherFormKelvinToCelsius";
import {getDate} from "../helpers/getDate";
import {getWindDirection} from "../helpers/getWindDirection";
import WeatherWidget from "./WeatherWidget";
import {IWeather} from "../types/global";

const TodayWeather: FC = () => {
    const {data, isLoading, isError} = weatherApi.useGetCurrentWeatherQuery(1)

    const weather: IWeather = useMemo(() => {
        if (isLoading) return {} as IWeather

        return {
            temp: weatherFormKelvinToCelsius(data?.main?.temp),
            feelLike: weatherFormKelvinToCelsius(data?.main?.feels_like),
            maxTemp: weatherFormKelvinToCelsius(data?.main?.temp_max),
            minTemp: weatherFormKelvinToCelsius(data?.main?.temp_min),
            date: getDate(),
            icon: `http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`,
            clouds: data?.clouds?.all,
            windDir: getWindDirection(data.wind.deg),
            windSpeed: data.wind.speed,
        }
    }, [data])

    return (
        <IsLoading isError={isError} isLoading={isLoading}>
            <div>
                {data && <Row gutter={[16, 16]} className={'column'} align={'middle'}>
                    <Col>
                        <Typography.Title level={3} style={{marginBottom: 0}}
                        >{data?.name}, {data?.sys?.country}</Typography.Title>
                    </Col>
                    <Col><WeatherWidget weather={weather}/></Col>
                </Row>}
            </div>
        </IsLoading>
    );
};

export default TodayWeather;