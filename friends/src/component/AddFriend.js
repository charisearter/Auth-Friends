import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


function AddFriend(props) {
  const { name, age, email } = props;
const [form, setForm] = useState(
  {
    name: '',
    age: '',
    email: ''
  }
);
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
       <form onSubmit={addFriend}>
        <label> Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />

          <label>Age: </label>
          <input
            type="text"
            name="age"
            value={age}
            onChange={onChange}
          />

          <label> Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <button>Add Friend</button>
        </form>
    </div>
  )
}

export default AddFriend
