import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from './views/home/index';
import Cards from './views/cards/cards';
import Blocks from './views/blocks/blocks'
import Forms from './views/forms/forms'
import Pricing from './views/pricing/pricing'


export default props => {

    return <Router history={hashHistory}>

        <Route path='/home' component={Home} />
        <Route path='/cards' component={Cards} />
        <Route path='/blocks' component={Blocks} />
        <Route path='/forms' component={Forms} />
        <Route path='/pricing' component={Pricing} />
        <Redirect from='*' to='/home'/>
    </Router>

}