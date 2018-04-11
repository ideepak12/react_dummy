import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import ContactForm from './components/ContactForm';
import FirstNameList from './components/FirstNameList';
import LastNameList from './components/LastNameList';
import CountryList from './components/CountryList';
import CityList from './components/CityList';
import SubjectList from './components/SubjectList';

class App extends Component {
  constructor() {
    super();
    this.state={
      data: [1,2,3,4,5,6,67,7,8,9],
      headings: {fname: 'First Name Lists', lname: 'Last Name List', city: 'City Name List', contact: 'Contact Form', country: 'Country Name List', subject: 'Subject List'}
    }
    this.getFormValues = this.getFormValues.bind(this);
  }

  getFormValues(values){
    alert(values.fname + ", " + values.lname + ', ' + values.city + ', ' + values.subject + ', ' + values.country);
  }

  render() {
    return (
      <div>
        <ContactForm
          headings={this.state.headings}
          getFormValues={this.getFormValues}
        />
        <FirstNameList headings={this.state.headings}/>
        <LastNameList headings={this.state.headings}/>
        <CountryList headings={this.state.headings}/>
        <CityList headings={this.state.headings}/>
        <SubjectList headings={this.state.headings}/>

        <ul>
          <UserList
            data={this.state.data}
          />
        </ul>
      </div>
    );
  }
}

export default App;
