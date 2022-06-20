import React, {FC} from 'react';
import AnimPage from "../components/H-O-C/AnimPage";
import {routeNames} from "../routes/routeNames";
import {Link} from 'react-router-dom';
import {Row, Typography} from 'antd';
import {useTypedSelector} from "../hooks/redux";

const HomePage: FC = () => {
    const {lang} = useTypedSelector(state => state.lang)

    return (
        <AnimPage>
            <Row align={'middle'} justify={'center'} className={'page'}>
                <Typography.Title style={{textAlign: 'center'}}>
                    <Link to={routeNames.TODOS}>{lang.homePageTitle}</Link>
                </Typography.Title>
            </Row>
        </AnimPage>
    );
};

export default HomePage;