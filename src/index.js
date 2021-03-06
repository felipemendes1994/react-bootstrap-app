import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Releases from './container/Releases';
import Backlog from './container/Backlog';
import Sprints from './container/Sprints';

import Home from './container/Home';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />

            <Route path='/releases' component={Releases} />
            <Route path='/backlog' component={Backlog} />
            <Route path='/sprints' component={Sprints} />
        </Route>

    </Router> 
    ,document.getElementById('root'));
registerServiceWorker();
