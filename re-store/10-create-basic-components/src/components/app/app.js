import React, {Fragment} from 'react';
import './app.css';
import {withBookstoreService} from '../hoc';
import Header from "../header/header";
import {Switch, Route} from "react-router-dom";
import {CardPage, HomePage} from '../pages';

const App = ({bookstoreService}) => {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/card/' component={CardPage}/>
            </Switch>
        </Fragment>

    );
}

export default withBookstoreService()(App);
