import React, {FC} from 'react';
import {IWeather} from "../types/global";
import {Card, Col, Row, Typography} from "antd";

const {Title} = Typography

interface IProps {
    weather: IWeather
}

const WeatherWidget: FC<IProps> = ({weather}) => {

    return (
        <Card title={<Title level={4} style={{textAlign: 'center'}}>{weather?.date}</Title>}>
            <Row gutter={[8, 8]} className={'column'}>
                <Row>Чувствуется как {weather?.feelLike} °С</Row>
                <Row gutter={[16, 16]} justify={'space-around'}>
                    <Col>{weather?.temp} °C</Col>
                    <Col>min {weather?.minTemp} °C — max {weather?.maxTemp} °C</Col>
                </Row>
            </Row>
            <Row>Облачность — {weather?.clouds}%</Row>
            <Row>Скорость ветра: {weather?.windSpeed} m/s</Row>
            <Row>Направление ветра: {weather?.windDir}</Row>
        </Card>
    );
};

export default WeatherWidget;