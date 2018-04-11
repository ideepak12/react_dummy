import React from 'react';
import UserList from './UserList'

const CityList = (props) => {
  if(props.cityList.length == 0) {
    return null
  }

  return(
    <div className="city">
      <h2> {props.headings.city} </h2>

      <ul>
        < UserList
          list={props.cityList}
        />
      </ul>
    </div>
  )
}

export default CityList;
