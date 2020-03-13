import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/Login'

import Home from './components/Home'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            < Home/>
          </Route>
          <Route path="/test">
            < Home/>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}
