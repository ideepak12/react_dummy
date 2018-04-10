import React from 'react';

const UserList = (props)=> {
  return(
    props.data.map(d=>(
      <li>{d}</li>
    ))
  )
}

export default UserList;
// const UserList = (props)=>(
//     props.
//   )
