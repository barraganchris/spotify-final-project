import React, { Component } from 'react';
import NavLink from './NavLink';
import axios from 'axios';
import { hashHistory } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  handleClick(e) {
    axios.get('https://accounts.spotify.com/authorize/?client_id=49fcf83682b54087bcb124eb34bfefa8&response_type=code&redirect_uri=https://localhost:8888/callback')
    .then(hashHistory.push('/home')
    );
  }

  render() {
    return (
      <div className="header-container">
        <h2>"This is the App Name"</h2>
          <button onClick={ this.handleClick.bind(this) }
            className="btn login">{ this.props.children }Login
          </button>
      </div>
    )
  }
}

export default Header;
