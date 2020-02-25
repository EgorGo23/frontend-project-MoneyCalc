import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../../../actions/calcActions';

const mapStateToProps = (state) => {
  const props = {
    currentInputValues: state.currentInputData_Calc,
    list: state.expensesIncomeList_Calc,
  };

  return props;
};

const actionCreators = {
  removeItem: actions.removeItem,
  clearList: actions.clearList,
  clearInputText: actions.clearInputText,
};

class ExpensesIncomeList extends Component {
  handleRemoveItem = (id) => {
    const { removeItem } = this.props;
    removeItem(id);
  }

  handleClearList = () => {
    const { clearList, clearInputText } = this.props;
    clearList();
    clearInputText();
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
              key={id}
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
                className="btn btn-outline-danger btn-sm"
                onClick={() => this.handleRemoveItem(id)}
              >
                &ndash;
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn btn-outline-primary mb-4 btn-lg btn-reset"
          onClick={this.handleClearList}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(ExpensesIncomeList);
