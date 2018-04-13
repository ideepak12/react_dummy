import React from 'react';
import UserList from './UserList'

const UsernameList = (props) => {
  if(props.usernameList.length == 0) {
    return null
  }

  return(
    <div className="username">
      <h2> {props.headings.username} </h2>

      <ul>
        < UserList
          list={props.usernameList}
        />
      </ul>
    </div>
  )
}

export default UsernameList;
