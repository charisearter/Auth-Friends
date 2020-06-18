import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

function DeleteFriend(props) {
  const { id } = props;
  const [deleteFriend, setDeleteFriend] = useState({
    id:'',
  });

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .delete(`/api/friends/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err.response.message))
  };

  const handleDelete = e => {
    setDeleteFriend({
      id: e.target.value
    });
    console.log(id);
  } 

  return (
    <div>
      <h2>Delete a Friend</h2>

    <form onSubmit={onSubmit}>
    <input type='text' onChange = {handleDelete} placeholder='Enter an ID' />
    <button>Delete Friend</button>

    </form>


    </div>
  )
}

export default DeleteFriend
