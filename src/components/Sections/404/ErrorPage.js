import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ErrorPage extends Component {
  render() {
    return (
      <div className="container col-lg-6">
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">404 NOT FOUND</h4>
          <p><Link to="/">Back to home</Link></p>
          <p className="mb-0"></p>
        </div>
      </div>
    );
  }
}

export default ErrorPage;