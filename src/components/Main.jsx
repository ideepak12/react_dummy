import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Welcome from './Welcome';
import CarList from './CarList';

class Main extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/welcome' component={Welcome}/>
          <Route path='/cars' component={CarList}/>
        </Switch>
      </div>
    )
  }
}

export default Main;
