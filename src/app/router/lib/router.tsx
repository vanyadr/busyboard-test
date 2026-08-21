import {createBrowserRouter} from 'react-router-dom';
import {routesConfig} from '@/app/router/lib/routes.config';
import {AppLayout} from '@/app/layouts/AppLayout';
import {RouterError} from '@/widgets/RouterError';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <RouterError />,
        children: [
            {
                index: true,
                lazy: () => import('@/pages/HomePage'),
            },
            {
                path: routesConfig.storage.path,
                lazy: () => import('@/pages/StoragePage'),
            },
            {
                path: routesConfig.favourites.path,
                lazy: () => import('@/pages/FavouritesPage'),
            },
            {
                path: routesConfig.finances.path,
                lazy: () => import('@/pages/FinancesPage'),
            },
            {
                path: routesConfig.analytics.path,
                lazy: () => import('@/pages/AnalyticsPage'),
            },
            {
                path: routesConfig.automatization.path,
                lazy: () => import('@/pages/AutomatizationPage'),
            },
            {
                path: routesConfig.lk.path,
                lazy: () => import('@/pages/LkPage'),
            },
            {path: '*', lazy: () => import('@/pages/NotFoundPage'), errorElement: <RouterError />},
        ],
    },
]);
