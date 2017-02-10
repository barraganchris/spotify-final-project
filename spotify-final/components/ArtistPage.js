import React, { Component } from 'react';

class ArtistPage extends Component {
  render() {
    return(
      <div className="main-content">

        <div className="artist-content>">
        <h2>"Artist Name"</h2>
{/* Where the Top Songs Populate */}
          <h3 className="top-songs">"Top Songs"</h3>
            <ul>
              <li>"Song #1"</li>
              <li>"Song #2"</li>
              <li>"Song #3"</li>
            </ul>
{/* Where the Albums Populate */}
          <h3 className="albums">"Albums"</h3>
            <ul>
              <li>"Album #1"</li>
              <li>"Album #2"</li>
              <li>"Album #3"</li>
            </ul>
{/* Where the Related Artists Populate */}
          <h3 className="related-artists">"Related Artists"</h3>
            <ul>
              <li>"Artist #1"</li>
              <li>"Artist #2"</li>
              <li>"Artist #3"</li>
            </ul>
        </div>

        <div className="playlist-buttons">
          <h4>"Description for Button #1"</h4>
            <button className="btn short"></button>
          <h4>"Description for Button #2"</h4>
            <button className="btn long"></button>
        </div>

      </div>
    )
  }
}

export default ArtistPage;
