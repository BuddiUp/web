import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
            }
        />
    );
};

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.elementType.isRequired
};

export default PrivateRoute;
