import React from 'react';
import { concat } from 'lodash';
import ContactForm from './ContactForm';
import FirstNameList from './FirstNameList';
import LastNameList from './LastNameList';
import CountryList from './CountryList';
import CityList from './CityList';
import UsernameList from './UsernameList';

class Home extends React.Component {
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
      usernameList: []
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
      usernameList: concat(this.state.usernameList, values.username),
    });
  }

  getFormValues(values){
    this.setState({ formData: values })
    this.updateList(values);
  }

  render() {
    return(
      <div>
        <h3>Home Component</h3>

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
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
