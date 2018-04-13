import React from 'react';
import { isEmpty } from 'lodash';
import axios from 'axios'

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state={
      fname: '',
      lname: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      city: '',
      country: 'india',
      error: {
        fname: '',
        lname: '',
        email: '',
        password: '',
        password_confirmation: '',
        city: '',
        username: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm (event){
    event.preventDefault()
    const errorAll = Object.assign({}, this.state.error);

    if (this.state.fname.length < 2 || this.state.lname.length < 2 ||
        this.state.city.length < 2 || this.state.username.length < 2 ||
        this.state.email.length < 5 || this.state.fname.password < 8 ||
        this.state.fname.password_confirmation < 8) {
      if (this.state.fname.length < 2) {
        errorAll['fname'] = 'First Name should be al-least 2 characters!' ;
      } else {
        errorAll['fname'] = '' ;
      }
      if (this.state.lname.length < 2) {
        errorAll['lname'] = 'Last Name should be al-least 2 characters!' ;
      } else {
        errorAll['lname'] = '' ;
      }
      if (this.state.username.length < 2) {
        errorAll['username'] = 'Username should be al-least 2 characters!' ;
      } else {
        errorAll['username'] = '' ;
      }
      if (this.state.email.length < 5) {
        errorAll['email'] = 'Email should be al-least 5 characters!' ;
      } else {
        errorAll['email'] = '' ;
      }
      if (this.state.password.length < 8) {
        errorAll['password'] = 'Password should be al-least 8 characters!' ;
      } else {
        errorAll['password'] = '' ;
      }
      if (this.state.password_confirmation.length < 8) {
        errorAll['password_confirmation'] = 'Repeated Password should be al-least 8 characters!' ;
      } else if (this.state.password.length >= 8 && this.state.password_confirmation.length >= 8
        && this.state.password != this.state.password_confirmation) {
        errorAll['password_confirmation'] = 'Password not matching!!!' ;
      } else {
        errorAll['password_confirmation'] = '' ;
      }
      if (this.state.city.length < 2) {
        errorAll['city'] = 'City Name should be al-least 2 characters!' ;
      } else {
        errorAll['city'] = '' ;
      }

      this.setState({error: errorAll});
    } else {
      const { fname, lname, username, email, password, password_confirmation, city, country } = this.state;
      const data = { fname, lname, username, email, password, password_confirmation, city, country }
      this.setState({
        fname: '',
        lname: '',
        username: '',
        city: '',
        email: '',
        password: '',
        password_confirmation: '',
        error: {
          fname: '',
          lname: '',
          username: '',
          city: '',
          email: '',
          password: '',
          password_confirmation: '',
        }
      })

      // Calling rails api to register user.
      axios.post(
        'http://localhost:3001/api/auth',
        {
          first_name: data.fname,
          last_name: data.lname,
          user_name: data.username,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
          city: data.city,
          country: data.country
        }
      )
      .then(response => {
        alert("Record saved successfully!!!")
        console.log(response)
      })
      .catch(error => {
        alert("Something failed due to error code: " + error.response.status)
        console.log(error)
      })

      this.props.getFormValues(data);
    }
  }

  render () {
    const isCompletedForm = false
    // const isCompletedForm = (
    //     isEmpty(this.state.fname) ||
    //     isEmpty(this.state.lname) ||
    //     isEmpty(this.state.city) ||
    //     isEmpty(this.state.country) ||
    //     isEmpty(this.state.username)
    //   )
    return(
      <div className="contact-form">
        <h2> {this.props.headings.contact} </h2>

        <form action="#">
          <div className="form-group">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              value={this.state.fname}
              name="fname"
              placeholder="Your name.."
              className="form-control"
              onChange={this.handleChange}
            />
            <div className="error-msg">
              {this.state.error.fname}
            </div>
          </div>
          <div className="form-group">
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              value={this.state.lname}
              name="lname"
              placeholder="Your last name.."
              className="form-control"
              onChange={this.handleChange}
            />
            <div className="error-msg">
              {this.state.error.lname}
            </div>
          </div>
          <div className="form-group">
            <label for="username">User Name</label>
            <input
              type="text"
              id="username"
              value={this.state.username}
              name="username"
              placeholder="Your username.."
              className="form-control"
              onChange={this.handleChange}
            />
            <div className="error-msg">
              {this.state.error.username}
            </div>
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              value={this.state.email}
              name="email"
              placeholder="Your email.."
              className="form-control"
              onChange={this.handleChange}
            />
            <div className="error-msg">
              {this.state.error.email}
            </div>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              name="password"
              placeholder="Enter password.."
              className="form-control"
              onChange={this.handleChange}
            />
            <div className="error-msg">
              {this.state.error.password}
            </div>
          </div>
          <div className="form-group">
            <label for="password_confirmation">Confirm Password</label>
            <input
              type="password"
              id="password_confirmation"
              value={this.state.password_confirmation}
              name="password_confirmation"
              placeholder="Repeate password.."
              className="form-control"
              onChange={this.handleChange}
            />
            <div className="error-msg">
              {this.state.error.password_confirmation}
            </div>
          </div>
          <div className="form-group">
            <label for="city">City Name</label>
            <input type="text"
              id="city"
              value={this.state.city}
              name="city"
              placeholder="Your last city.."
              className="form-control"
              onChange={this.handleChange}
            />
            <div className="error-msg">
              {this.state.error.city}
            </div>
          </div>
          <div className="form-group">
            <label for="country">Country</label>
            <select id="country" name="country" className='form-control' onChange={this.handleChange}>
              <option value="australia">Australia</option>
              <option value="india" selected>India</option>
              <option value="us">us</option>
            </select>
          </div>
          <div className="form-group">
            <button
              type="button"
              disabled={isCompletedForm}
              onClick={this.submitForm}
              value="Submit"
              className="btn btn-primary"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm;
