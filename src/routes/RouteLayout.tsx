import React, {FC} from 'react';
import {Layout} from "antd";
import {Outlet} from 'react-router-dom'
import HeaderComponent from "../components/HeaderComponent";
const {Content} = Layout

const RouteLayout: FC = () => {
    return (
        <div className={'app'}>
            <HeaderComponent/>
            <Content>
                <Outlet/>
            </Content>
        </div>
    );
};

export default RouteLayout;