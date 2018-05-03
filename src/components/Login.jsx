import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginAction from '../actions/LoginAction';
import _ from 'lodash';

class Login extends React.Component {
  renderData() {
    return (
      <div>
        {_.map(this.props.users, user => (
          <h1> {user.name}: {user.password} </h1>
        ))}
        <br/> <br/> <br/>
        <form>
          <p> Name: <input type="text" name='name' /> </p>
          <p> Password: <input type="password" name="password" /> </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  render() {
    return(
      <div className="">
        <h1> Login Form </h1>
        {this.props.users.length > 0 ?
          this.renderData()
          :
          <div className="">
            <h1>No Data Found</h1>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    LoginAction: bindActionCreators(LoginAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
