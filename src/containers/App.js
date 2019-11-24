import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './loginContainer';
import DashbordPage from './dashboardContainer';
import StudentPage from './studentContainer';


function App(props){
    return(
        <Router>
            <Switch>
                <Route exact path= '/' component={DashbordPage}></Route>
                <Route path= '/login' component={LoginPage}></Route>
                <Route path= '/student' component={StudentPage}></Route>
            </Switch>
        </Router>
    )
}

export default connect(null,{})(App)