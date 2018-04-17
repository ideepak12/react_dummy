import React from 'react';
import UserList from './UserList'

const FirstNameList = (props) => {
  if(props.fnameList.length === 0) {
    return null
  }

  return(
    <div className="first_name">
      <h2> {props.headings.fname} </h2>
      <ul>
        < UserList
          list={props.fnameList}
        />
      </ul>
    </div>
  )
}

export default FirstNameList;
