import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routeNames} from "./routeNames";
import HomePage from "../pages/HomePage";
import TodosPage from "../pages/TodosPage";
import RouteLayout from "./RouteLayout";
import NotFoundedPage from "../pages/NotFoundedPage";
import TodoByID from "../components/TodoByID";
import SettingPage from "../pages/SettingPage";

const AllRoute = () => {
    return (
        <Routes>
            <Route path={'/'} element={<RouteLayout/>}>
                <Route path={routeNames.HOME} element={<HomePage/>}/>
                <Route path={routeNames.NOT_FOUND} element={<NotFoundedPage/>}/>
                <Route path={routeNames.TODOS} element={<TodosPage/>}/>
                <Route path={routeNames.TODOS} element={<TodoByID/>}/>
                <Route path={routeNames.SETTING} element={<SettingPage/>}/>
            </Route>
        </Routes>
    );
};

export default AllRoute;