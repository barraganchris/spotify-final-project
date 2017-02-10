import React, { Component } from 'react';

class RelatedPlaylist extends Component {
  render() {
    return (
      // The app-made playist! This will take over the artist content, buttons still on RIGHT side. Can be pressed to make a new playlist.
      <div className="main-content">

        <div className="chosen-playlist">
          <h3>"Playlist Name"</h3>
            <ul>
              <li>"Playlist Item #1"</li><button className="btn delete">"Delete"</button>
              <li>"Playlist Item #2"</li><button className="btn delete">"Delete"</button>
              <li>"Playlist Item #3"</li><button className="btn delete">"Delete"</button>
            </ul>
        </div>

        <div className="second-buttons">
          <h4>"Add New Playlist to an Existing One"</h4>
            <button className="btn add"></button>
          <h4>"Save this Playlist as a New One"</h4>
            <button className="btn save"></button>
        </div>

      </div>
    )
  }
}

export default RelatedPlaylist;
