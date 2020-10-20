import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Blocks from '../src/pages/blocks/Blocks';
import Card from '../../src/pages/card/Card';
import Pricing from '../src/pages/pricing/Princing';
import Form from '../src/pages/forms/Form';
import Index from '../src/pages/index/Index';

export default props => (
    <Router history={hashHistory}>
        <Route path='/block' component={Blocks}/>
        <Route path='/card' component={Card}/>
        <Route path='/index' component={Index}/>
        <Route path='/form' component={Form}/>
        <Route path='/pricing' component={Pricing}/>
        <Redirect from='*' to='/index'/>
    </Router>
)
