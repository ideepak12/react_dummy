import React from 'react';
import { Nav, NavItem } from 'react-bootstrap/lib';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
    this.state={
      activeTabClassName:  "tab1"
    }

    this.changeState = this.changeState.bind(this);
  }
  changeState(selected_tab) {
    this.setState({ activeTabClassName: selected_tab });
  }

  render() {
    return(
      <header>
        <Nav bsStyle="tabs" activeKey="1" onSelect={k => {}}>
          <NavItem eventKey="1" title="home" href="/" onClick={this.getInitialState}>
            Home
          </NavItem>
          <NavItem eventKey="2" title="welcome" href="/welcome" onClick={this.getInitialState}>
            Welcome
          </NavItem>
          <NavItem eventKey="3" title="cars" href="/cars" onClick={this.getInitialState}>
            Car
          </NavItem>
        </Nav>

        <nav>
          <ul className="nav nav-pills">
            <li
              onClick={()=>this.changeState('tab1')}
              className={(this.state.activeTabClassName === "tab1") ? "active" : ""}
              name='home'
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={()=>this.changeState('tab2')}
              className={(this.state.activeTabClassName === "tab2") ? "active" : ""}
              name='welcome'
            >
              <Link to="/welcome">Welcome</Link>
            </li>
            <li
              onClick={()=>this.changeState('tab3')}
              className={(this.state.activeTabClassName === "tab3") ? "active" : ""}
              name='cars'
            >
              <Link to="/cars">Car</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
