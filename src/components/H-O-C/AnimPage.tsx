import { motion } from 'framer-motion';
import React, {FC, ReactElement, ReactNode} from 'react';

interface IProps {
    className?: string,
    children: ReactNode | ReactElement
}

const AnimPage: FC<IProps> = ({className, children}) => {
    return (
        <motion.div className={className ? `${className} container` : 'container'}>
            {children}
        </motion.div>
    );
};

export default AnimPage;