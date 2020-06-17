import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

//import components
import Login from './component/Login'
import FriendsList from './component/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
       <ul>
        <li>
          <Link to="/login">Login Page</Link>
        </li>
        <li>
          <Link to="/protected">Friends List  (Protected Page)</Link>
        </li>
      </ul>
      <Route path="/login" component={Login} />
      <Route path="/protected" component={FriendsList} />
    </div>
  </Router>
  );
}

export default App;
