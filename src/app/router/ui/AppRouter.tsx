import {router} from '@/app/router/lib/router';
import {RouterProvider} from 'react-router-dom';

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export {AppRouter};
