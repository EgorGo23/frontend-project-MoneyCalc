import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const props = {
    money: state.money,
  }

  return props;
}

class Categories extends Component {
  render() {
    return (
        <div className="col categories-field">
          <ul className="list-group list-group-flush categories-field__list">
            <li
              className="list-group-item categories-field__list__list-item"
            >
              <button
                type="button"
                className="btn btn-info categories-field__list__list-btn"
              >
                Food
              </button>
              <strong>4</strong>
            </li>
            <li
              className="list-group-item categories-field__list__list-item"
            >
              <button
                type="button"
                className="btn btn-info categories-field__list__list-btn"
              >
                Payment of an apartment
              </button>
              <strong>4</strong>
            </li>
            <li
              className="list-group-item categories-field__list__list-item"
            >
              <button
                type="button"
                className="btn btn-info categories-field__list__list-btn"
              >
                Prepayment
              </button>
              <strong>4</strong>
            </li>
            <li
              className="list-group-item categories-field__list__list-item"
            >
              <button
                type="button"
                className="btn btn-info categories-field__list__list-btn"
              >
                Salary
              </button>
              <strong>4</strong>
            </li>
            <li
              className="list-group-item categories-field__list__list-item"
            >
              <button
                type="button"
                className="btn btn-info categories-field__list__list-btn"
              >
                General expenses
              </button>
              <strong>4</strong>
            </li>
            <li
              className="list-group-item categories-field__list__list-item-last mt-1"
            >
              <h4>Total</h4>
              <span className="categories-field__list__list-item-last__total-value">40000</span>
            </li>
          </ul>
        </div>
    );
  }
}

export default connect(mapStateToProps)(Categories);
