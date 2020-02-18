import React, { Component } from 'react';

class Expenditure extends Component {
  render() {
    return (
        <div className="col-7 expenditure-field">
          <ul className="list-group list-group-flush expenditure-field__list">
            <li
              className="list-group-item expenditure-field__list__list-item"
            >
              <div>
                <strong className='expenditure-field__list__list-item__category-name'>Cras justo odio</strong>
                <span className="expenditure-field__list__list-item__date">24.05.20</span>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
              >
                &ndash;
              </button>
            </li>
          </ul>

          <button type="button" className="btn btn-outline-danger mb-4 btn-lg btn-reset">Reset</button>
        </div>
    );
  }
}

export default Expenditure;
