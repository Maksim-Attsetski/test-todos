import React, {FC} from 'react';
import {Layout, Menu} from "antd";
import {NavLink} from 'react-router-dom'
import {Outlet} from "react-router-dom";
import {routeNames} from "./routeNames";

const {Header, Content} = Layout

interface IHeaderLinks {
    to: string, text: string,
}

const RouteLayout: FC = () => {

    const headerLinks: IHeaderLinks[] = [
        { to: routeNames.HOME, text: 'Home' },
        { to: routeNames.TODOS, text: 'Todos' },
    ]
    const items = headerLinks.map((link: IHeaderLinks) => {
        return {
            key: link.to,
            label: <NavLink to={link.to}>{link.text}</NavLink>
        }
    })

    return (
        <div className={'app'}>
            <Header className={'header'}
            style={{position: 'fixed', top: 0, left: 0, right: 0, height: 'var(--headerHeight)', zIndex: 999 }}
            >
                <Menu theme={'dark'} mode="horizontal" items={items}/>
            </Header>
            <Content>
                <Outlet/>
            </Content>
        </div>
    );
};

export default RouteLayout;