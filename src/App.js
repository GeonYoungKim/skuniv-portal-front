import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'react-dates/initialize';
import ProfessorLecture from './containers/ProfessorLecture';
import LectureDetail from './containers/LectureDetail';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Assignment from './containers/Assignment';
import AssignmentStudent from './containers/AssignmentStudent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="layout">
          <Switch>
            <Route path="/signIn" component={SignIn}/>
            <Route path="/signUp" component={SignUp}/>
            <Route path="/professor/lecture" component={ProfessorLecture}/>
            <Route path="/lecture/detail/:lectureId?" component={LectureDetail}/>
            <Route path="/lecture/assignment/:lectureId?/:lectureName?" component={Assignment}/>
            <Route path="/lecture/assignment-student/:assignmentId?/:assignmentName?" component={AssignmentStudent}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
