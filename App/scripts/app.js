import React from 'react';
import Router from 'react-router';
var {DefaultRoute, Route} = Router;

import AppHeader from './Components/Header';

// Views
import Home from './Views/Home';
import About from './Views/About';

var routes = (
  <Route name="app" path="/" handler={AppHeader}>
    <Route name="about" handler={About}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, (Handler) => React.render(<Handler /> , document.body));
