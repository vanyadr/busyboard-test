import styles from './AppLayout.module.scss';
import {Outlet} from 'react-router-dom';
import {Header} from '@/widgets/Header';

const AppLayout = () => {
    return (
        <>
            <Header />
            <main className={styles.content}>
                <Outlet />
            </main>
        </>
    );
};

export {AppLayout};
