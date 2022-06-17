import React, {FC} from 'react';
import AnimPage from "../components/H-O-C/AnimPage";
import {useTypedSelector} from "../hooks/redux";

const NotFoundedPage: FC = () => {
    const {lang} = useTypedSelector(state => state.lang)

    return (
        <AnimPage>
            <strong>404</strong> {lang.pageIsNotFound}
        </AnimPage>
    );
};

export default NotFoundedPage;