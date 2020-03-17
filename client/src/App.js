import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/Login'

import Home from './components/Home'

import Portfolio from './components/Portfolio'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            < Home/>
          </Route>
          <Route path="/portfolio">
            < Portfolio/>
          </Route>
          <Route path="/assets/Resume - Paul Soniat.pdf">
            <div>
            <a href="/assets/Resume - Paul Soniat.pdf" class="btn btn-default btn-lg" target="_blank">View Resume</a>
            </div>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}
