import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import history from '../history';
import BaseRouter from '../router';
import { GlobalStyle } from '../global-styles';
import { theme } from '../theme';
import Navigation from './navigation/Navigation';
import Footer from '../components/footer/Footer';

export default () => {
    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navigation />
                <BaseRouter />
                <Footer />
            </ThemeProvider>
        </Router>
    );
};
