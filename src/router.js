import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/home/Home';

const Container = styled.div`
    width: 1375px;
    padding: 0px 25px;
    margin: 0px auto;
`;

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Home} />
    </div>
);
export default BaseRouter;
