import React from 'react';
import UserList from './UserList'

const CountryList = (props) => {
  if(props.countryList.length == 0) {
    return null
  }

  return(
    <div className="country">
      <h2> {props.headings.country} </h2>

      <ul>
        < UserList
          list={props.countryList}
        />
      </ul>
    </div>
  )
}

export default CountryList;
