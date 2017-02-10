import React, { Component } from 'react';
import NavLink from './NavLink';

class Nav extends Component {
  render() {
    return (
      //Try and use a Bootstrap Nav bar for neatness
      <div className="nav-container">
        <ul className="nav-ul">
          <li className="nav-li"><NavLink className="navlink-home" to="/home" onlyActiveOnIndex>"Home"</NavLink></li>
          <li className="nav-li"><NavLink className="navlink-search" to="/search" onlyActiveOnIndex>"Search"</NavLink></li>
          <li className="nav-li"><NavLink className="navlink-about" to="/about" onlyActiveOnIndex>"About"</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Nav;
