import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import ContactForm from './components/ContactForm';

class App extends Component {
  constructor() {
    super();
    this.state={
      data: [1,2,3,4,5,6,67,7,8,9]
    }
  }
  render() {
    return (
      <div>
        <ul>
          <UserList
            data={this.state.data}
          />
        </ul>

        <ContactForm />
      </div>
    );
  }
}

export default App;
