import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function FriendsList(props) {

  const { name, nickname } = props;
const [form, setForm] = useState(
  {
    name: '',
    nickname: ''
  }
)

const onChange = e => {
  e.preventDefault();
setForm({
  ...form,
  [e.target.name]: e.target.value
})
};

const addFriend = e => {
  e.preventDefault();
  //make axios post request and send credentials
  console.log(form)
  axiosWithAuth() //change axios to axiosWithAuth() for all axios calls
    .post('/api/friends', form)
    .then(res => { 
      console.log(res)
    })
    .catch(err => console.log(err.response));
};
  return (
    <div>
      <h2> add friend form goes here </h2> 
      <form onSubmit={addFriend}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={onChange}
          />
          <button>Add Friend</button>
        </form>
    </div>
  )
}

export default FriendsList
