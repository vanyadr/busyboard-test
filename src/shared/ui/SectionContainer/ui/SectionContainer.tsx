import styles from './SectionContainer.module.scss';
import cn from 'classnames';
import {ReactNode} from 'react';

interface ISectionContainerProps {
    className?: string;
    children: ReactNode;
    title: string;
}

const SectionContainer = ({className, title, children}: ISectionContainerProps) => {
    return (
        <>
            <div className={styles.subinfo}>
                <span>{title}</span>
            </div>
            <div className={cn(className, styles.container)}>{children}</div>
        </>
    );
};

export {SectionContainer};
