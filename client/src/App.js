import React,{ Component } from 'react';
import Welcome from './components/welcomeMessage/welcome'
import React from "react";
import "./styles/App.css";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
<>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome/>
      </header>
    </div>
    <Router> 
      <div className="App">
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/welcom" component={welcome}/>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
