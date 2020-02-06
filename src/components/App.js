import React from 'react';
import { Router } from 'react-router-dom';
import history from '../history';
import styled, { ThemeProvider } from 'styled-components';
import Navigation from './navigation/Navigation';
import { GlobalStyle } from '../global-styles';
import BaseRouter from '../router';
import { theme } from '../theme';

const Container = styled.div`
    width: 1375px;
    padding: 0px 25px;
    margin: 0px auto;
`;

export default () => {
    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navigation />
                <Container>
                    <BaseRouter />
                </Container>
            </ThemeProvider>
        </Router>
    );
};
