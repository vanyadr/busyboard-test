import {useRouteError} from 'react-router-dom';
import {memo} from 'react';

const RouterError = memo(() => {
    const error = useRouteError();

    return (
        <>
            <h1>{error instanceof Error ? error.message : String(error)}</h1>
        </>
    );
});

export {RouterError};
