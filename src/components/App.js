import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    const isAuthenticated = useSelector((state) => state.authReducer.token !== null);
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
                <Navigation isAuthenticated={isAuthenticated} />
                <BaseRouter isAuthenticated={isAuthenticated} />
                <Footer />
            </ThemeProvider>
        </Router>
    );
};
