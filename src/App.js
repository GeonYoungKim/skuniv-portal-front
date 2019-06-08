import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'react-dates/initialize';

import ProfessorLecture from './containers/ProfessorLecture';
<<<<<<< HEAD

=======
import ProfessorLectureDetail from './containers/ProfessorLectureDetail';
>>>>>>> 9e21b3141fc5d4f59d3befa54b29bd2553bd454a
class App extends Component {
  render() {
    return (
      <Router>
        <div className="layout ">
          <Switch>
            <Route path="/professor/lecture" component={ProfessorLecture}/>
            <Route path="/professor/lecture/:lectureId?/detail" component={ProfessorLectureDetail}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
