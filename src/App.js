import React, { Component } from 'react';
import WorkExperience from './components/WorkExperience.js'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Home from './components/Home.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={WorkExperience} />
        <Route path="/projects" component={Projects} />
        <Route path="/experiences" component={Experiences} />
      </BrowserRouter>

    );
  }
}

export default App;
