import React from 'react';

const Header = () => {
  return(
    <header>
      <nav>
        <ul className="nav nav-pills">
          <li><a href="/">Home</a></li>
          <li><a href="/welcome">Welcome</a></li>
          <li><a href="/cars">Car</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
