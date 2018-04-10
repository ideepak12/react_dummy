import React from 'react';

class ContactForm extends React.Component {
  render () {
    return(
      <div>
        <h2> Contact Form </h2>

        <form action="#">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <br/><br/>
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          <br/><br/>
          <label for="city">City Name</label>
          <input type="text" id="city" name="city" placeholder="Your last city.." />
          <br/><br/>
          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">India</option>
            <option value="canada">Canada</option>
            <option value="usa">Us</option>
          </select>
          <br/><br/>
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
          <br/><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ContactForm;
