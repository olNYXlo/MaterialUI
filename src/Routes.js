import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import App from './App';

const Routes = () => {
    return (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/Home" component={Home}/>
        </div>
    </Router>
    )
}

export default Routes;


