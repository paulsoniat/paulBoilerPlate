import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/Login'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}
