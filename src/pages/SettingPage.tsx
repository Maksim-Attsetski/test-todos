import React, {FC, useEffect} from 'react';
import {Col, Divider, Dropdown, Layout, Menu, Row, Space, Typography} from "antd";
import AnimPage from "../components/H-O-C/AnimPage";
import {DownOutlined} from "@ant-design/icons";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {langSliceActions} from "../redux/slices/langSlice";

const SettingPage: FC = () => {
    const dispatch = useTypedDispatch()
    const {lang} = useTypedSelector(state => state.lang)
    const {changeLang} = langSliceActions

    const dropdown = (
        <Menu items={['ru', 'en'].map((item) => {
            return {key: item, label: <div onClick={() => dispatch(changeLang(item))}>{item}</div>}
        })}/>
    )

    return (
        <Layout className={'page'}>
            <AnimPage>
                <Row>
                    <Col>
                        <Typography.Title>{lang.settings}</Typography.Title>
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