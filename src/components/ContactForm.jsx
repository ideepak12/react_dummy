import React from 'react';
import {isEmpty } from 'lodash';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state={
      fname: '',
      lname: '',
      city: '',
      country: 'india',
      subject: '',
      error: {fname: '', lname: '', city: '', subject: ''}
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
        this.state.city.length < 2 || this.state.subject.length < 10) {
      if (this.state.fname.length < 2) {
        errorAll['fname'] = 'First Name is Invalid!' ;
      } else {
        errorAll['fname'] = '' ;
      }
      if (this.state.lname.length < 2) {
        errorAll['lname'] = 'Last Name is Invalid!' ;
      } else {
        errorAll['lname'] = '' ;
      }
      if (this.state.city.length < 2) {
        errorAll['city'] = 'City Name is Invalid!' ;
      } else {
        errorAll['city'] = '' ;
      }
      if (this.state.subject.length < 10) {
        errorAll['subject'] = 'Subject is Invalid!' ;
      } else {
        errorAll['subject'] = '' ;
      }

      this.setState({error: errorAll});
    } else {
      const { fname, lname, city, country, subject} = this.state;
      const data ={fname, lname, city,country, subject }
      this.setState({
        fname: '',
        lname: '',
        city: '',
        subject: '',
        error: {
          fname: '',
          lname: '',
          city: '',
          subject: ''
        }
      })
      this.props.getFormValues(data);
    }
  }

  render () {
    const isCompletedForm = (
        isEmpty(this.state.fname) ||
        isEmpty(this.state.lname) ||
        isEmpty(this.state.city) ||
        isEmpty(this.state.country) ||
        isEmpty(this.state.subject)
      )
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
            <label for="subject">Subject</label>
            <textarea
              id="subject"
              value={this.state.subject}
              name="subject"
              placeholder="Write something.."
              className="form-control"
              onChange={this.handleChange}
            ></textarea>
            <div className="error-msg">
              {this.state.error.subject}
            </div>
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
