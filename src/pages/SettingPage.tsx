import React, {useEffect} from 'react';
import {Col, Divider, Dropdown, Layout, Menu, Row, Space} from "antd";
import AnimPage from "../components/H-O-C/AnimPage";
import {DownOutlined} from "@ant-design/icons";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {langSliceActions} from "../redux/slices/langSlice";

const SettingPage = () => {
    const dispatch = useTypedDispatch()
    const {lang} = useTypedSelector(state => state.lang)
    const {changeLang} = langSliceActions

    const dropdown = (
        <Menu items={['ru', 'en'].map((item) => {
            return {key: item, label: <div onClick={() => dispatch(changeLang(item))}>{item}</div>}
        })}/>
    )

    const getApi = async () => {
        const link = 'https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D'

        const key = 'a94d0a5ac08570add4b47b8da933f247'
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=${key}`
        const futureWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=${key}`

        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '7478cc3b8fmshe38eb915b449914p17f1aajsn7719f5428dee',
        //         'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
        //     }
        // };
        //
        // fetch('https://aerisweather1.p.rapidapi.com/forecasts/cairo,eg', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));

        fetch(currentWeatherUrl)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        fetch(futureWeatherUrl)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                const sunTime = response.city.sunrise
                const date = new Date(sunTime)
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getApi()
    }, [])


    return (
        <Layout className={'page'}>
            <AnimPage>
                <Row>
                    <Col>
                        <h1>{lang.settings}</h1>
                        <Divider/>
                        <Dropdown overlay={dropdown}>
                            <Space>
                        <span>
                            {lang.language}
                        </span>
                                <DownOutlined/>
                            </Space>
                        </Dropdown>
                    </Col>
                </Row>
            </AnimPage>
        </Layout>
    );
};

export default SettingPage;