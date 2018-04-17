import React from 'react';
import UserList from './UserList'

// class LastNameList extends React.Component {
const LastNameList = (props) => {
  if(props.lnameList.length === 0) {
    return null
  }
  // render () {
    return(
      <div className="last_name">
        <h2> {props.headings.lname} </h2>

        <ul>
          < UserList
            list={props.lnameList}
          />
        </ul>
      </div>
    )
  // }
}

export default LastNameList;
