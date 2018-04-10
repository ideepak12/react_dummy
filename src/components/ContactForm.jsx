import React from 'react';

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
    this.fName = this.fName.bind(this);
    this.lName = this.lName.bind(this);
    this.city = this.city.bind(this);
    this.subject = this.subject.bind(this);
    this.country = this.country.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  fName(e) {
    this.setState({fname: e.target.value});
  }

  lName(e) {
    this.setState({lname: e.target.value});
  }

  city(e) {
    this.setState({city: e.target.value});
  }

  country(e){
    this.setState({country: e.target.value});
  }

  subject(e){
    this.setState({subject: e.target.value});
  }

  submitForm (event){
    event.preventDefault()
    const { fname, lname, city, country, subject} = this.state;
    const data ={fname, lname, city,country, subject }
    this.props.submitForm(data);
  }

  render () {
    return(
      <div>
        <h2> {this.props.headings.contact} </h2>

        <form action="#">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={this.state.fname}
            name="firstname"
            placeholder="Your name.."
            onChange={this.fName}
          />

          <br/><br/>
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={this.state.lname}
            name="lastname"
            placeholder="Your last name.."
            onChange={this.lName}
          />

          <br/><br/>
          <label for="city">City Name</label>
          <input type="text"
          id="city" value={this.state.city} name="city" placeholder="Your last city.." onChange={this.city} />

          <br/><br/>
          <label for="country">Country</label>
          <select id="country" name="country" onChange={this.country}>
            <option value="australia">Australia</option>
            <option value="india" selected>India</option>
            <option value="us">us</option>
          </select>

          <br/><br/>
          <label for="subject">Subject</label>
          <textarea id="subject" value={this.state.subject} name="subject" placeholder="Write something.." onChange={this.subject} ></textarea>

          <br/><br/>
          <input type="submit" onClick={this.submitForm} value="Submit" />
        </form>
      </div>
    )
  }
}

export default ContactForm;
