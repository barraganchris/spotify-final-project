import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import App from './App';
import Landing from './components/Landing';
import About from './components/About';
import Home from './components/Home';
import Search from './components/Search';

ReactDOM.render(
  <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Landing } />
        <Route path="/home" component={ Home }/>
        <Route path="/search" component={ Search }/>
        <Route path="/about" component={ About }/>
      </Route>
    </Router>,
  document.getElementById('root')
);
