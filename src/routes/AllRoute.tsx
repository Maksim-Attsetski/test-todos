import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routeNames} from "./routeNames";
import HomePage from "../pages/HomePage";
import TodosPage from "../pages/TodosPage";
import RouteLayout from "./RouteLayout";

const AllRoute = () => {
    return (
        <Routes>
            <Route path={routeNames.HOME} element={<RouteLayout/>}>
              <Route path={routeNames.HOME} element={<HomePage/>} />
              <Route path={routeNames.TODOS} element={<TodosPage/>} />
            </Route>
        </Routes>
    );
};

export default AllRoute;