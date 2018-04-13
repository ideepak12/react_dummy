import React from 'react';
import axios from 'axios';

class CarList extends React.Component {
  constructor () {
    super();
    this.state={
      cars: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/cars')
    .then(response => {
      console.log(response)
      this.setState({cars: response.data})
    })
    .catch(error => console.log(error))
  }

  render () {
    return(
      <div className="cars_list">
        <h1> Cars List </h1>
        
        {this.state.cars.map((car, index) => (
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
}

export default CarList;
