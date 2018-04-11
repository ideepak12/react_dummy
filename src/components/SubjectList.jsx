import React from 'react';
import UserList from './UserList'

const SubjectList = (props) => {
  if(props.subjectList.length == 0) {
    return null
  }

  return(
    <div className="subject">
      <h2> {props.headings.subject} </h2>

      <ul>
        < UserList
          list={props.subjectList}
        />
      </ul>
    </div>
  )
}

export default SubjectList;
