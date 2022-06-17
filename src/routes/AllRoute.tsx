import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routeNames} from "./routeNames";
import HomePage from "../pages/HomePage";
import TodosPage from "../pages/TodosPage";
import RouteLayout from "./RouteLayout";
import NotFoundedPage from "../pages/NotFoundedPage";
import TodoByID from "../components/TodoByID";
import SettingPage from "../pages/SettingPage";
import WeatherPage from "../pages/WeatherPage";
import TodayWeather from "../components/TodayWeather";
import FutureWeather from "../components/FutureWeather";

const AllRoute = () => {
    return (
        <Routes>
            <Route path={'/'} element={<RouteLayout/>}>
                <Route path={routeNames.HOME} element={<HomePage/>}/>
                <Route path={routeNames.NOT_FOUND} element={<NotFoundedPage/>}/>
                <Route path={routeNames.TODOS} element={<TodosPage/>}/>
                <Route path={routeNames.TODOS} element={<TodoByID/>}/>
                <Route path={routeNames.SETTING} element={<SettingPage/>}/>
                <Route path={routeNames.WEATHER} element={<WeatherPage/>}>
                    <Route path={routeNames.TODAY_WEATHER} element={<TodayWeather/>}/>
                    <Route path={routeNames.FUTURE_WEATHER} element={<FutureWeather/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default AllRoute;