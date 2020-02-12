import React, { Component } from 'react';

class Categories extends Component {
  render() {
    return (
        <div className="col categories">
          <h3 className="label">Categories</h3>

          <ul className="list-group list-group-flush cat-list">
            <li
              className="list-group-item category"
            >
              <button
              type="button"
              className="btn btn-info"
              >
                Food
              </button>
              <span className="badge badge-pill badge-success">4</span>
            </li>
            <li
              className="list-group-item category"
            >
              <button
              type="button"
              className="btn btn-info"
              >
                Payment of an apartment
              </button>
              <span className="badge badge-pill badge-success">4</span>
            </li>
            <li
              className="list-group-item category"
            >
              <button
              type="button"
              className="btn btn-info"
              >
                Prepayment
              </button>
              <span className="badge badge-light">4</span>
            </li>
            <li
              className="list-group-item category"
            >
              <button
              type="button"
              className="btn btn-info"
              >
                Salary
              </button>
              <span className="badge badge-light">4</span>
            </li>
            <li
              className="list-group-item category"
            >
              <button
              type="button"
              className="btn btn-info"
              >
                General expenses
              </button>
              <span className="badge badge-light">4</span>
            </li>
          </ul>

          <hr />

          
          </div>
    );
  }
}

export default Categories;