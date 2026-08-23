import {Button} from 'antd';
import {routesConfig} from '@/app/router';
import {memo, useMemo} from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.module.scss';
import {
    BookOpenedOutlineIcon,
    ChevronDownIcon,
    Logo,
    NotificationOutlineIcon,
    StarFillIcon,
    UserOutlineIcon,
} from '@/shared/assets/svg';
import {userStore} from '@/entities/User';

export const Header = memo(() => {
    const {user} = userStore;
    const navigationItems = useMemo(() => Object.values(routesConfig).filter((item) => item.nav), []);

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <Link to={routesConfig.home.fullPath} className={styles.logo}>
                    <Logo />
                </Link>
                <Link to={routesConfig.favourites.fullPath}>
                    <Button className={styles.fav}>
                        <div>
                            <StarFillIcon />
                        </div>
                        <span>{routesConfig.favourites.title}</span>
                    </Button>
                </Link>
                {navigationItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.fullPath}
                        className={({isActive}) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </nav>
            <div className={styles.widgets}>
                <div className={styles.company}>
                    <Link to={'#'} className={styles.companyName}>
                        {user.name}
                    </Link>
                    <div>
                        <ChevronDownIcon />
                    </div>
                </div>
                <div className={styles.actions}>
                    <Link to={'#'} className={styles.action}>
                        <BookOpenedOutlineIcon />
                    </Link>
                    <Link to={'#'} className={styles.action}>
                        <NotificationOutlineIcon />
                    </Link>
                    <div className={styles.avatarContainer}>
                        <div className={styles.avatar} style={{background: user.color}}>
                            <UserOutlineIcon />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
});
