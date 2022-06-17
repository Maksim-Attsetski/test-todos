import React, {FC, ReactElement, ReactNode} from 'react';
import {Col, Row} from "antd";
import {useTypedSelector} from "../../hooks/redux";

interface IProps {
    isLoading: boolean,
    isError: boolean,
    children: ReactElement | ReactNode
}

const IsLoading: FC<IProps> = ({isLoading, isError, children}) => {
    const {lang} = useTypedSelector(state => state.lang)

    const getCenterEl = (text: string): ReactElement => (<Row align={'middle'} justify={'center'}>
        <Col style={{textAlign: 'center', fontSize: 'clamp(22px, 7vmin, 44px)'}}>
            {text}
        </Col>
    </Row>)

    if (isLoading) return getCenterEl(`${lang.loading}...`)
    if (isError) return getCenterEl(`${lang.error}...`)
    else return <div>{children}</div>
};

export default IsLoading;