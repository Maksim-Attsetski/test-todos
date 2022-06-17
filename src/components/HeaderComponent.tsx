import React, {FC, useEffect} from 'react';
import {Dropdown, Layout, Menu, Row, Space} from "antd";
import {routeNames} from "../routes/routeNames";
import {NavLink, useLocation} from "react-router-dom";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {DownOutlined} from "@ant-design/icons";
import {langSliceActions} from "../redux/slices/langSlice";

const {Header} = Layout

interface IHeaderLinks {
    to: string,
    text: string,
}

const HeaderComponent: FC = () => {
    const {lang} = useTypedSelector(state => state.lang)

    const headerLinks: IHeaderLinks[] = [
        {to: routeNames.HOME, text: lang.home},
        {to: routeNames.TODOS, text: lang.todos},
        {to: routeNames.WEATHER, text: lang.weather},
        {to: routeNames.SETTING, text: lang.settings},
    ]
    const items = headerLinks.map((link: IHeaderLinks) => {
        return {
            key: link.to,
            label: <NavLink to={link.to}>{link.text}</NavLink>
        }
    })

    return (
        <Header className={'header'}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 'var(--headerHeight)',
                    zIndex: 999
                }}
        >
                <Menu theme={'dark'} mode="horizontal" items={items}/>
        </Header>
    );
};

export default HeaderComponent;