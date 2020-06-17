import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import AddFriend from './AddFriend';

function FriendsList(props) {

  //const { name, age, email } = props;

const [friends, setFriends] = useState([])



const getFriends = e => {
  e.preventDefault();
  //make axios post request and send credentials
  axiosWithAuth() //change axios to axiosWithAuth() for all axios calls
    .get('/api/friends')
    .then(res => { 
      setFriends(res.data)
    })
    .catch(err => console.log(err.response));
};


  return (
    <div>
      <h2> add friend form goes here </h2> 

      <button onClick={getFriends}> View Friends</button>

      <AddFriend />
      

      {friends.map(friend => (
        <div>
          <h2> Name: {friend.name}  </h2>
          <p> Age: {friend.age}  </p>
          <p> Email: {friend.email}  </p>
        </div>
      ))}
   </div>  
    
  )
}

export default FriendsList
