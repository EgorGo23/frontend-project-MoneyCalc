import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { uniqueId } from 'lodash';
import * as actions from '../../../actions/calcActions';

const mapStateToProps = ({ calc }) => {
  const props = {
    currentInputData: calc.currentInputData,
    list: calc.expensesIncomeList,
  };

  return props;
};

const actionCreators = {
  removeItem: actions.removeItem,
  clearList: actions.clearList,
  clearInputFields: actions.clearInputFields,
};

export class ExpensesIncomeList extends Component {
  removeItemHandler = (id) => {
    const { removeItem } = this.props;
    removeItem(id);
  }

  clearListHandler = () => {
    const { clearList, clearInputFields } = this.props;
    clearList();
    clearInputFields();
  }

  render() {
    const { list } = this.props;
    return (
      <div className="col-md-6 col-ex d-flex flex-column">
        <ul className="list-group list-group-flush list_expInc">
          {list.map(({
            id, category, date, money,
          }) => (
            <li
              className="list-group-item pl-0 pr-1 d-flex justify-content-between align-items-center"
              key={uniqueId()}
            >
              <div
                className={cn({
                  "data-field d-flex justify-content-between align-items-center": true,
                  [`${(category.categorySign === '+' || category.categoryName === 'Start value') ? 'success' : 'danger'}`]: true,
                })}
              >
                <strong className="data-field_category-name">{category.categoryName}</strong>
                <span>{date}</span>
                <strong className="data-field_money">
                  {(category.categorySign === '+' || category.categoryName === 'Start value') ? `+${money}` : `-${money}`}
                </strong>
              </div>
              <button
                type="button"
                className={cn({
                  btn: true,
                  'btn-sm': true,
                  [`${(category.categorySign === '+' || category.categoryName === 'Start value') ? 'btn-outline-success' : 'btn-outline-danger'}`]: true,
                })}
                onClick={() => this.removeItemHandler(id)}
              >
                &ndash;
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn btn-custom align-self-center"
          onClick={this.clearListHandler}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(ExpensesIncomeList);
