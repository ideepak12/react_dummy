import React, { Component } from 'react';
import logo from './logo.svg';
import { concat } from 'lodash';
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
      headings: {
        fname: 'First Name Lists',
        lname: 'Last Name List',
        city: 'City Name List',
        contact: 'Contact Form',
        country: 'Country Name List',
        subject: 'Subject List'
      },
      formData: {},
      fnameList: [],
      lnameList: [],
      cityList: [],
      countryList: [],
      subjectList: []
    }

    this.getFormValues = this.getFormValues.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  updateList(values) {
    this.setState({
      fnameList: concat(this.state.fnameList, values.fname),
      lnameList: concat(this.state.lnameList, values.lname),
      cityList: concat(this.state.cityList, values.city),
      countryList: concat(this.state.countryList, values.country),
      subjectList: concat(this.state.subjectList, values.subject),
    });
  }

  getFormValues(values){
    this.setState({ formData: values })
    this.updateList(values);
  }

  render() {
    return (
      <div>
        <ContactForm
          headings={this.state.headings}
          getFormValues={this.getFormValues}
        />
        <FirstNameList
          headings={this.state.headings}
          fnameList={this.state.fnameList}
        />
        <LastNameList
          headings={this.state.headings}
          lnameList={this.state.lnameList}
        />
        <CountryList
          headings={this.state.headings}
          countryList={this.state.countryList}
        />
        <CityList
          headings={this.state.headings}
          cityList={this.state.cityList}
        />
        <SubjectList
          headings={this.state.headings}
          subjectList={this.state.subjectList}
        />

        <ul>
          <UserList
            list={this.state.data}
          />
        </ul>
      </div>
    );
  }
}

export default App;
