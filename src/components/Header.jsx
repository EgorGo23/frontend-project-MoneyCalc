import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div className="Header container">
        <div className="row justify-content-md-between justify-content-sm-center row_header">
          <div className="col col_btn-nav d-flex px-0">
            <Link
              to="/"
              className="btn-nav"
            >
              <h2 className="btn-nav_name">Money Calculation</h2>
            </Link>
          </div>
          <div className="col col_btn-nav d-flex px-0">
            <Link
              to="/notebook"
              className="btn-nav"
            >
              <h2 className="btn-nav_name btn-nav_name_notebook">Notebook</h2>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
