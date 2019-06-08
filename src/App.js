import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'react-dates/initialize';

import ProfessorLecture from './containers/ProfessorLecture';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="layout ">
          <Switch>
            <Route path="/professor/lecture" component={ProfessorLecture}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
