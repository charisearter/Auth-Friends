import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import AddFriend from './AddFriend';

function FriendsList(props) {

  //const { name, age, email } = props;

const [friends, setFriends] = useState([])



const getFriends = e => {
  const token = window.localStorage.getItem('token');
  //make axios post request and send credentials
  console.log(friends)
  axiosWithAuth() //change axios to axiosWithAuth() for all axios calls
    .post('/api/friends', friends)
    .then(res => { 
      setFriends({
        //map over friends data array object?
        friends: res.data
      })
    })
    .catch(err => console.log(err.response));
};


  return (
    <div>
      <h2> add friend form goes here </h2> 
      <button> View Friends</button>

      <AddFriend />
      </div>

      
     
    
  )
}

export default FriendsList
