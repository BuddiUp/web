import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import history from '../history';
import BaseRouter from '../router';
import { GlobalStyle } from '../global-styles';
import { theme } from '../theme';
import Navigation from './navigation/Navigation';
import Footer from './footer/Footer';
import { authCheck } from '../store/actions/action.auth';

export default () => {
    const { isAuthenticated, user } = useSelector(
        (state) => ({
            isAuthenticated: state.authReducer.token !== null,
            user: state.authReducer.user
        }),
        shallowEqual
    );
    const dispatch = useDispatch();

    const initAuthCheck = useCallback(() => {
        dispatch(authCheck());
    }, [dispatch]);

    useEffect(() => {
        initAuthCheck();
    }, [initAuthCheck]);

    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navigation
                    isAuthenticated={isAuthenticated}
                    firstName={user.name}
                    lastName={user.last_name}
                />
                <BaseRouter isAuthenticated={isAuthenticated} />
                <Footer />
            </ThemeProvider>
        </Router>
    );
};
