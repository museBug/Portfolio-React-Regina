import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {About} from './pages/About';
import {Projects} from './pages/Projects';
import {Contact} from './pages/Contact';


function App() {
  return (
    <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
  );
}

export default App;
