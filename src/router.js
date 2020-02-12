import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Authentication from './components/authentication/Authentication';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' render={() => <Authentication isTypeLogin />} />
        <Route
            exact
            path='/register'
            render={() => <Authentication isTypeLogin={false} />}
        />
    </div>
);
export default BaseRouter;
