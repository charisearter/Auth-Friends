import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

//import components
import Login from './component/Login'
import FriendsList from './component/FriendsList';
import AddFriend from './component/AddFriend';
import DeleteFriend from './component/DeleteFriend';

function App() {
  return (
    <Router>
      <div className="App">
       <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friends">Friends List</Link>
        </li>
        <li>
          <Link to='/add'>Add Friend</Link>
        </li>
        <li>
          <Link to='/delete'>Delete Friend</Link>
        </li>
      </ul>
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/protected" component={FriendsList} />
      <Route exact path="/protected" component={AddFriend} />
      <Route exact path="/protected" component={DeleteFriend} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
