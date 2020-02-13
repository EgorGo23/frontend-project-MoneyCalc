import React, { Component } from 'react';

class Expenditure extends Component {
  render() {
    return (
        <div className="col-7 expenditure">
          <ul className="list-group list-group-flush list-exp">
            <li
              className="list-group-item list-item"
            >
              <div>
                <strong>Cras justo odio</strong>
                <span className="date">24.05.20</span>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
              >
                &ndash;
              </button>
            </li>
          </ul>

          <button type="button" className="btn btn-outline-danger btn-lg btn-reset">Reset</button>
        </div>
    );
  }
}

export default Expenditure;