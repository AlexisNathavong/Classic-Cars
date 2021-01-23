import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Components
import HomePage from './HomePage';
import SignUp from './Navigation/SignUp';
import SignIn from './Navigation/SignIn';
import SignOut from './Navigation/SignOut';
import AboutPage from './AboutPage';
import DashBoardPage from './DashBoardPage';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {

    return (
        <Router>
            <div className='app-router'>
                <Link to='/'>Home</Link>
                <Link to='/sign-up'>SignUp</Link>
                <Link to='/sign-in'>SignIn</Link>
                <Link to='/sign-out'>SignOut</Link>
                <Link to='/about-page'>About</Link>
                <Link to='/dashboard'>DashBoard</Link>

            </div> 

            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/sign-in' component={SignIn} />
                <Route path='/sign-out' component={SignOut} />
                <Route path='/about-page' component={AboutPage} />
                <PrivateRoute path='/dashboard' component={DashBoardPage} />

            </Switch>
        </Router>

    )
}

export default AppRouter;