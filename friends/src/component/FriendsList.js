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
const onDelete = (e, id) => {
  e.preventDefault();
  axiosWithAuth()
  .delete(`/api/friends/${id}`)
  .then(res => setFriends(res.data))
  .catch(err => console.log(err.response.message))
};

  return (
    <div>
      <h2> add friend form goes here </h2> 

      <button onClick={getFriends}> View Friends</button>

      <AddFriend />
      
{/* //display friends after button click */}
      {friends.map(friend => (
        <div key={friend.id}>
          <h2> Name: {friend.name}  </h2>
          <p> Age: {friend.age}  </p>
          <p> Email: {friend.email}  </p>
          <button onClick={(e) => onDelete(e, friend.id)}>Delete Friend</button>
        </div>
      ))}
   </div>  
    
  )
}

export default FriendsList
