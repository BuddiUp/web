import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/home/Home';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Home} />
    </div>
);
export default BaseRouter;
