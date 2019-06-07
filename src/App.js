import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Main from './containers/Main';
import Search from './containers/Search';
import Post from './containers/Post';
import Account from './containers/Account';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import FindPassword from './containers/FindPassword';
import FindId from './containers/FindId';
import CreatePost from './containers/CreatePost';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="layout ">
          <Switch>
            <Route path="/main/:job?/:view?/:id?" component={Main} />
            <Route path="/search/:pageNo?/:content?" component={Search} />
            <Route path="/post/:postId?" component={Post} />
            <Route path="/account/:job?/:view?/:id?" component={Account} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/findId" component={FindId} />
            <Route path="/findPassword" component={FindPassword} />
            <Route path="/createPost/:postType?" component={CreatePost}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
