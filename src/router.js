import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './components/home/Home';
import Discover from './components/discover/Discover';
import Authentication from './components/authentication/Authentication';
import Profile from './components/profile/Profile';
import PrivateRoute from './router.private';

const BaseRouter = ({ isAuthenticated }) => {
    return (
        <>
            <Route exact path='/' component={Home} />
            <PrivateRoute
                exact
                path='/discover'
                isAuthenticated={isAuthenticated}
                component={Discover}
            />

            <PrivateRoute
                exact
                path='/settings'
                isAuthenticated={isAuthenticated}
                component={Home}
            />

            <PrivateRoute
                exact
                path='/profile'
                isAuthenticated={isAuthenticated}
                component={Profile}
            />

            <PrivateRoute
                exact
                path='/user'
                isAuthenticated={isAuthenticated}
                component={Profile}
            />

            <PrivateRoute
                exact
                path='/user/:id'
                isAuthenticated={isAuthenticated}
                component={Profile}
            />

            <Route exact path='/login' render={() => <Authentication isTypeLogin />} />
            <Route
                exact
                path='/register'
                render={() => <Authentication isTypeLogin={false} />}
            />
        </>
    );
};

BaseRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

export default BaseRouter;
