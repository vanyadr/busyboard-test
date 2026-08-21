const routesConfig = {
    home: {
        path: '/',
        title: 'Главная',
        fullPath: '/',
        nav: false,
    },
    favourites: {
        path: 'favourites',
        title: 'Избранное',
        fullPath: '/favourites',
        nav: false,
    },
    finances: {
        path: 'finances',
        title: 'Финансы',
        fullPath: '/finances',
        nav: true,
    },
    storage: {
        path: 'storage',
        title: 'Склад',
        fullPath: '/storage',
        nav: true,
    },
    analytics: {
        path: 'analytics',
        title: 'Аналитика',
        fullPath: '/analytics',
        nav: true,
    },
    automatization: {
        path: 'automatization',
        title: 'Автоматизация',
        fullPath: '/automatization',
        nav: true,
    },
    lk: {
        path: 'lk',
        title: 'Личный кабинет',
        fullPath: '/lk',
        nav: false,
    },
};

export {routesConfig};
