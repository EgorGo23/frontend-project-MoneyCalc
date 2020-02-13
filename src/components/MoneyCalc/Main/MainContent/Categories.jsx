import React, { Component } from 'react';

class Categories extends Component {
  render() {
    return (
        <div className="col categories">
          <ul className="list-group list-group-flush cat-list">
            <li
              className="list-group-item list-category"
            >
              <button
                type="button"
                className="btn btn-info btn-category"
              >
                Food
              </button>
              <strong>4</strong>
            </li>
            <li
              className="list-group-item list-category"
            >
              <button
                type="button"
                className="btn btn-info btn-category"
              >
                Payment of an apartment
              </button>
              <strong>4</strong>
            </li>
            <li
              className="list-group-item list-category"
            >
              <button
                type="button"
                className="btn btn-info btn-category"
              >
                Prepayment
              </button>
              <strong>4</strong>
            </li>
            <li
              className="list-group-item list-category"
            >
              <button
                type="button"
                className="btn btn-info btn-category"
              >
                Salary
              </button>
              <strong>4</strong>
            </li>
            <li
              className="list-group-item list-category"
            >
              <button
                type="button"
                className="btn btn-info btn-category"
              >
                General expenses
              </button>
              <strong>4</strong>
            </li>
            <li
              className="list-group-item list-category last-elem"
            >
              <h4>Total</h4>
              <span className="total">40000</span>
            </li>
          </ul>
        </div>
    );
  }
}

export default Categories;
