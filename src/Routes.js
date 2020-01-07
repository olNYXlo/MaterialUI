import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Manulife from './Manulife';
import Timesheet from './Timesheet';
import TestLogin from './TestLogin';

const Routes = () => {
    return (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/Home" component={Home}/>
            <Route path="/Manulife" component={Manulife}/>
            <Route path="/Timesheet" component={Timesheet}/>
            <Route path="/Login" component={TestLogin}/>
        </div>
    </Router>
    )
}

export default Routes;


