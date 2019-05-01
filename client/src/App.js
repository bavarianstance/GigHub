import "./App.css";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav';
import Login from './views/Login/Login';

const App = () => (
  <Router>
    <div className="mainBody">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        {/* <Route exact path="/dashboard" component={Dashboard}/> */}
      </Switch>
    </div>
  </Router>
);

export default App;