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
      <div className="col-7 expensesIncomeList-field">
        <ul className="list-group list-group-flush expensesIncomeList-field__list">
          {list.map(({
            id, category, date, money,
          }) => (

            <li
              className="list-group-item expensesIncomeList-field__list__list-item pl-0 pr-1"
              key={uniqueId()}
            >
              <div
                className={cn({
                  'expensesIncomeList-field__list__list-item__content-field': true,
                  [`${(category.categorySign === '+' || category.categoryName === 'Start value') ? 'success' : 'danger'}`]: true,
                })}
              >
                <strong className="expensesIncomeList-field__list__list-item__content-field__category-name">{category.categoryName}</strong>
                <span className="expensesIncomeList-field__list__list-item__content-field__date">{date}</span>
                <strong className="expensesIncomeList-field__list__list-item__content-field__money">
                  {(category.categorySign === '+' || category.categoryName === 'Start value') ? money : `-${money}`}
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
          className="btn btn-outline-primary mb-4 btn-lg expensesIncomeList-field__btn-reset"
          onClick={this.clearListHandler}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(ExpensesIncomeList);
