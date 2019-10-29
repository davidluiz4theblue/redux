import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routesUrl from './RouteURL';
import Nav from './../Nav/Nav';
class Page extends Component {
  showPage = routesUrl => {
    let result = null;
    if (routesUrl) {
      result = routesUrl.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
  render() {
    return <Router>
    <Nav/>
    {this.showPage(routesUrl)}
    </Router>;
  }
}

export default Page;
