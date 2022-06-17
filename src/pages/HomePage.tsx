import React, {FC} from 'react';
import AnimPage from "../components/H-O-C/AnimPage";
import {routeNames} from "../routes/routeNames";
import {Link} from 'react-router-dom';
import {Row} from 'antd';
import {useTypedSelector} from "../hooks/redux";

const HomePage: FC = () => {
    const {lang} = useTypedSelector(state => state.lang)

    return (
        <AnimPage>
            <Row align={'middle'} justify={'center'} className={'page'}>
                <h1 style={{textAlign: 'center'}}><Link to={routeNames.TODOS}>{lang.homePageTitle}</Link></h1>
            </Row>
        </AnimPage>
    );
};

export default HomePage;