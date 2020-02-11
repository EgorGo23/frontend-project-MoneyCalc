import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="row align-items-center btn-select">
        <div className="col btn-todo">
          <h2>
            <Link
              to="/"
              className='nav-link'
            >
              Money Calculation
            </Link>
          </h2>
        </div>
        <div className="col btn-note">
          <h2>
            <Link
              to="/notebook"
              className='nav-link'
            >
              Notebook
            </Link>
          </h2>
        </div>
      </div>
    );
  }
}

export default Header;
