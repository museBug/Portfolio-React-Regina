import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {About} from './components/About';
import {Project} from './components/Project';
import {Contact} from './components/Contact';
import {Navigationbar} from './components/Navigationbar';


class App extends Component {
  render () {
  return (
    <React.Fragment>
      <Navigationbar />
      <Router>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={Project} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
}

export default App;
