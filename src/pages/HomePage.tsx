import React, {FC} from 'react';
import AnimPage from "../components/H-O-C/AnimPage";
import {routeNames} from "../routes/routeNames";
import {Link} from 'react-router-dom';
import {Row} from 'antd';

const HomePage: FC = () => {
    return (
        <AnimPage>
            <Row align={'middle'} justify={'center'} className={'page'}>
                <h1><Link to={routeNames.TODOS}>Click to Todo</Link></h1>
            </Row>
        </AnimPage>
    );
};

export default HomePage;