import React from 'react';
import {Route, Switch} from "react-router-dom";

import LandingPage from '../containers/landingpage/landingpage';
import Store from '../containers/store/store';
import SingleGame from '../containers/singleGame/singleGame';
import Social from '../containers/social/social';
import Checkout from '../containers/checkout/checkout';

const Routes = () => {

    const allRoutes = [
        {
            _id: 0,
            exact: true,
            path: '/',
            Component: LandingPage
        }, {
            _id:1,
            exact: true,
            path: '/store',
            Component: Store
        }, {
            _id:2,
            exact: false,
            path: '/store/:id',
            Component: SingleGame
        }, {
            _id:3,
            exact: false,
            path: '/social',
            Component: Social
        }, {
            _id:4,
            exact: false,
            path: '/checkout',
            Component: Checkout
        }
    ]

    const renderRoutes = allRoutes.map(r => {
        return <Route
                key={r._id}
                exact={r.exact}
                path={r.path}
                render={(props) => <r.Component {...props}/>}/>
    })

    return (<Switch>
        {renderRoutes}
    </Switch>)
}

export default Routes;
