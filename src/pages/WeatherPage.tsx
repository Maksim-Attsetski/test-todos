import {Button, Col, Divider, Row, Typography} from 'antd';
import React, {FC} from 'react';
import AnimPage from "../components/H-O-C/AnimPage";
import {useTypedSelector} from "../hooks/redux";
import {Link, Outlet, useLocation} from "react-router-dom";
import {routeNames} from "../routes/routeNames";

const WeatherPage: FC = () => {
    const {lang} = useTypedSelector(state => state.lang)
    const location = useLocation()
    const path = location.pathname
    console.log(path)

    return (
        <AnimPage className={'page'}>
            <Row className={'column'}>
                <Typography.Title>{lang.weather}</Typography.Title>
                <Row gutter={[10, 10]} align={'middle'}>
                    <Col>
                        <Typography.Text>{lang.lookWeatherOn}</Typography.Text>
                    </Col>
                    <Col>
                        {(path === routeNames.WEATHER || path === routeNames.FUTURE_WEATHER) &&
                            <Button type={'primary'} style={{marginRight: 15}}>
                                <Link to={routeNames.TODAY_WEATHER}>{lang.todayWeather}</Link>
                            </Button>}
                        {(path === routeNames.WEATHER || path === routeNames.TODAY_WEATHER) &&
                            <Button type={'primary'}>
                                <Link to={routeNames.FUTURE_WEATHER}>{lang.futureWeather}</Link>
                            </Button>}
                    </Col>
                </Row>
                <Divider/>
                <Col>
                    <Outlet/>
                </Col>
            </Row>
        </AnimPage>
    );
};

export default WeatherPage;