import React from 'react';

const CarList = (props) => {
  if(props.list.length == 0) {
    return null
  }

  return(
    <div className="cars_list">
      {props.list.map((car, index) => (
        <div>
          <h3>
            No: {index} ---
            Make: {car.make} ---
            Model: {car.model} ---
            Price: {car.price}
          </h3>
        </div>
      ))}
    </div>
  )
}

export default CarList;
