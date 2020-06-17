//build login form username password

import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'



function Login(props) {
const { username, password } = props;
const [credentials, setCredentials] = useState(
  {
    username: '',
    password: ''
  }
)

const onChange = e => {
  e.preventDefault();
setCredentials({
  ...credentials,
  [e.target.name]: e.target.value
})
};

const login = e => {
  e.preventDefault();
  //make axios post request and send credentials
  console.log(credentials)
  axiosWithAuth() //change axios to axiosWithAuth() for all axios calls
    .post('http://localhost:5000/api/login', credentials)
    .then(res => {
      window.localStorage.setItem('token', res.data.payload);
      //navigate user to FriendsList
      props.history.push('/protected');
    })
    .catch(err => console.log(err.response));
};

  return (
    <div>
      <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <button>Log in</button>
        </form>
    </div>
  )
}

export default Login
