import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import Watch from '../pages/watch/Watch'

function Routes() {
    const user = true
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    {user ? <Home /> : <Redirect to="/register" />}
                </Route>
                <Route path='/register'>
                    {!user ? <Register /> : <Redirect to="/" />}
                </Route>
                <Route path='/login'>
                    {!user ? <Login /> : <Redirect to="/" />}
                </Route>

                {user && (
                    <>
                        <Route exact path='/series'>
                            <Home type="series" />
                        </Route>
                        <Route exact path='/movies'>
                            <Home type="movies" />
                        </Route>
                        <Route path='/watch'>
                            <Watch />
                        </Route>
                    </>
                )}

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
