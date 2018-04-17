import React from 'react';

const UserList = (props)=> {
  if (props.list === null || props.list === undefined) {
    return null
  }

  return(
    props.list.map(d=>(
      <li>{d}</li>
    ))
  )
}

export default UserList;
