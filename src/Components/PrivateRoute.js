import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../Components/Loading';

export const PrivateRoute = ({component, ...args}) => {
    return (
        <Route
            component={withAuthenticationRequired(component, {
                onRedirecting: () => <Loading />
            })}
            {...args}
        />
    )
}

export default PrivateRoute;