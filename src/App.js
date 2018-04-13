import React, { Component } from 'react';
import logo from './logo.svg';
import { concat } from 'lodash';
import './App.css';
import './custom.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap/lib';
import axios from 'axios'

import UserList from './components/UserList';
import ContactForm from './components/ContactForm';
import FirstNameList from './components/FirstNameList';
import LastNameList from './components/LastNameList';
import CountryList from './components/CountryList';
import CityList from './components/CityList';
import UsernameList from './components/UsernameList';
import CarList from './components/CarList';

class App extends Component {
  constructor() {
    super();
    this.state={
      headings: {
        contact: 'User Registration Form',
        fname: 'First Name Lists',
        lname: 'Last Name List',
        city: 'City Name List',
        country: 'Country Name List',
        username: 'User Name List'
      },
      formData: {},
      fnameList: [],
      lnameList: [],
      cityList: [],
      countryList: [],
      usernameList: [],
      cars: []
    }

    this.getFormValues = this.getFormValues.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/cars')
    .then(response => {
      console.log(response)
      this.setState({cars: response.data})
    })
    .catch(error => console.log(error))
  }

  updateList(values) {
    this.setState({
      fnameList: concat(this.state.fnameList, values.fname),
      lnameList: concat(this.state.lnameList, values.lname),
      cityList: concat(this.state.cityList, values.city),
      countryList: concat(this.state.countryList, values.country),
      usernameList: concat(this.state.usernameList, values.username),
    });
  }

  getFormValues(values){
    this.setState({ formData: values })
    this.updateList(values);
  }

  render() {
    return (
      <div className='container'>
        <div className="main-app-class">
          <ContactForm
            headings={this.state.headings}
            getFormValues={this.getFormValues}
          />

          <div className='row'>
            <div className="col-md-4">
              <FirstNameList
                headings={this.state.headings}
                fnameList={this.state.fnameList}
              />
            </div>
            <div className="col-md-4">
              <LastNameList
                headings={this.state.headings}
                lnameList={this.state.lnameList}
              />
            </div>
            <div className="col-md-4">
              <CountryList
                headings={this.state.headings}
                countryList={this.state.countryList}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <CityList
                headings={this.state.headings}
                cityList={this.state.cityList}
              />
            </div>
            <div className="col-md-8">
              <UsernameList
                headings={this.state.headings}
                usernameList={this.state.usernameList}
              />
            </div>
          </div>

          <CarList
          list={this.state.cars}
          />
        </div>
      </div>
    );
  }
}

export default App;
