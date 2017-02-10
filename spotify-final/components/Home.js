import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      // Header/Footer/Nav are imported here also
      <div className="main-content">
        <ul className="user-playlists">
          <li>"PLaylist #1"</li>
          <li>"PLaylist #2"</li>
          <li>"PLaylist #3"</li>
        </ul>

        <button className="btn new">"New Button"</button>

      </div>
    )
  }
}

export default Home;
