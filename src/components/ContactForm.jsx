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
      subject: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.isCompletedForm = this.isCompletedForm.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm (event){
    event.preventDefault()
    const { fname, lname, city, country, subject} = this.state;
    const data ={fname, lname, city,country, subject }
    this.setState({fname: '', lname: '', city: '', subject: ''})
    this.props.getFormValues(data);
  }

  isCompletedForm(){
    return true
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
      <div>
        <h2> {this.props.headings.contact} </h2>

        <form action="#">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={this.state.fname}
            name="fname"
            placeholder="Your name.."
            onChange={this.handleChange}
          />

          <br/><br/>
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={this.state.lname}
            name="lname"
            placeholder="Your last name.."
            onChange={this.handleChange}
          />

          <br/><br/>
          <label for="city">City Name</label>
          <input type="text"
            id="city"
            value={this.state.city}
            name="city"
            placeholder="Your last city.."
            onChange={this.handleChange}
          />

          <br/><br/>
          <label for="country">Country</label>
          <select id="country" name="country" onChange={this.handleChange}>
            <option value="australia">Australia</option>
            <option value="india" selected>India</option>
            <option value="us">us</option>
          </select>

          <br/><br/>
          <label for="subject">Subject</label>
          <textarea
            id="subject"
            value={this.state.subject}
            name="subject"
            placeholder="Write something.."
            onChange={this.handleChange}
          ></textarea>

          <br/><br/>
          <button
            type="submit"
            disabled={isCompletedForm}
            onClick={this.submitForm}
            value="Submit"
          >
            Submit Form
          </button>
        </form>
      </div>
    )
  }
}

export default ContactForm;
