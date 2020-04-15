import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Home'
import Group from './Group'
import Manageable from './Manageable'

class App extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path='/' component={Home} />
                    <Route exact={true} path='/grupid' component={Group} />
                    <Route exact={true} path='/haldamisel' component={Manageable} />
                </Switch>
            </Router>
        );
    }
}

export default App;