import {Button, Col, Divider, Row} from 'antd';
import React, {FC} from 'react';
import AnimPage from "../components/H-O-C/AnimPage";
import {useTypedSelector} from "../hooks/redux";
import {Link, Outlet} from "react-router-dom";
import {routeNames} from "../routes/routeNames";

const WeatherPage: FC = () => {
    const {lang} = useTypedSelector(state => state.lang)

    return (
        <AnimPage className={'page'}>
            <Row>
                <Col>
                    <h1>{lang.weather}</h1>
                    <Button type={'primary'}>
                        <Link to={routeNames.TODAY_WEATHER}>{lang.todayWeather}</Link>
                    </Button>
                    <Button type={'primary'}>
                        <Link to={routeNames.FUTURE_WEATHER}>{lang.futureWeather}</Link>
                    </Button>

                </Col>
                <Col>
                    <Divider/>
                    <Outlet/>
                </Col>
            </Row>
        </AnimPage>
    );
};

export default WeatherPage;