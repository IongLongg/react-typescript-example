import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/auth/Login/Login';
import Home from './pages/home/Home';
import About from './pages/about/About';

const App: React.FunctionComponent = (): React.ReactElement => {
    const wrapper = React.createRef();
    return (
        <div className="App" ref={wrapper as any}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
