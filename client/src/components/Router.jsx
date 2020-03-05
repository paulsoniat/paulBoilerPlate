import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from './Router.jsx';
import Home from "./Home.jsx"


const AppRouter = () => (
  <div>
Hello
  <Router>
    <div style={{ backgroundColor: '#F8EEE7' }}>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </div>
  </Router>
  </div>
);

export default AppRouter;