import React, { Component } from 'react';

class AddToAnother extends Component {
  render() {
    return (
      // Shows a list of CURRENT User playlists to add the NEW playlist onto
      <div className="current-playlists">
        <ul>
          <li>"Playlist #1"</li><button className="btn addto">"Add"</button>
          <li>"Playlist #2"</li><button className="btn addto">"Add"</button>
          <li>"Playlist #3"</li><button className="btn addto">"Add"</button>
        </ul>
      </div>
    )
  }
}

export default AddToAnother;
