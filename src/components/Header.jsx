import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div className="row justify-content-center navbar">
        <div className="col d-flex justify-content-between navbar__btn-panel px-0">
          <Link
            to="/"
            className='navbar__btn-panel__nav-link py-2'
          >
            <h2 className="navbar__btn-panel__nav-link__btn-name">Money Calculation</h2>
          </Link>
          <Link
            to="/notebook"
            className='navbar__btn-panel__nav-link py-2'
          >
            <h2 className="navbar__btn-panel__nav-link__btn-name">Notebook</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
