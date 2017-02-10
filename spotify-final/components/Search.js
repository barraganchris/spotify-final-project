import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>"Search for an Artist you like!"</h2>

        <form>
          <label>
            "Search":
            <input type="text" name="search" />
          </label>
            <input type="submit" value="Submit" />
        </form>

        <ul className="search-results">
          <li>"Artist #1"</li>
          <li>"Artist #2"</li>
          <li>"Artist #3"</li>
        </ul>
      </div>
    )
  }
}

 /* The Artist Results Should be Clickable! AND should have the artist image next to them */

export default Search;
