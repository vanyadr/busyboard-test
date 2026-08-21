import {Avatar, Button} from 'antd';
import {routesConfig} from '@/app/router';
import {memo, useMemo} from 'react';
import {NavLink, Link} from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import styles from './Header.module.scss';

export const Header = memo(() => {
    const navigationItems = useMemo(() => Object.values(routesConfig).filter((item) => item.nav), []);

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <Link to={routesConfig.home.fullPath} className={styles.logo}>
                    Busyboard
                </Link>
                <Link to={routesConfig.favourites.fullPath}>
                    <Button className={styles.fav}>
                        <StarIcon />
                        <span>Избранное</span>
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
                        ГК ТУЗЕМУН
                    </Link>
                    <ExpandMoreIcon />
                </div>
                <div className={styles.actions}>
                    <Link to={'#'} className={styles.action}>
                        <MenuBookOutlinedIcon width={32} height={32} />
                    </Link>
                    <Link to={'#'} className={styles.action}>
                        <NotificationsNoneOutlinedIcon width={32} height={32} />
                    </Link>
                    <Avatar className={styles.avatar}>ГТ</Avatar>
                </div>
            </div>
        </header>
    );
});
