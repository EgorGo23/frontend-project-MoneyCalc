import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import cn from 'classnames';
import * as actions from '../../../actions/calcActions';

const categoryList = {
  Food: '-',
  'Payment of an apartment': '-',
  'General expenses': '-',
  Prepayment: '+',
  Salary: '+',
};

const mapStateToProps = (state) => {
  const props = {
    currentInputValues: state.currentInputData_Calc,
    list: state.expensesIncomeList_Calc,
  };
  return props;
};

const actionCreators = {
  addItem: actions.addItem,
  clearInputText: actions.clearInputText,
};

export class Categories extends Component {
  handleAddItem = (categoryName) => {
    const {
      addItem, currentInputValues, clearInputText,
    } = this.props;
    addItem({
      id: _.uniqueId(),
      category: {
        categoryName,
        categorySign: categoryList[categoryName],
      },
      date: currentInputValues.currentDate,
      money: +currentInputValues.currentMoney,
    });
    clearInputText();
  }

  render() {
    const { list, currentInputValues } = this.props;

    const renderCategoryButton = (categoryName) => (
      (currentInputValues.currentDate && currentInputValues.currentMoney) ? (
        <button
          type="button"
          className={cn({
            btn: true,
            'categories-field__list__list-item__category-btn': true,
            [`btn-${(categoryList[categoryName]) === '+' ? 'success' : 'danger'}`]: true,
          })}
          onClick={() => this.handleAddItem(categoryName)}
        >
          {categoryName}
        </button>
      ) : (
        <button
          type="button"
          className={cn({
            btn: true,
            'categories-field__list__list-item__category-btn': true,
            [`btn-${(categoryList[categoryName]) === '+' ? 'success' : 'danger'}`]: true,
          })}
          onClick={() => this.handleAddItem(categoryName)}
          disabled
        >
          {categoryName}
        </button>
      )
    );

    return (
      <div className="col categories-field">
        <ul className="list-group list-group-flush categories-field__list">
          {Object.keys(categoryList).map((element) => (<li
                className="list-group-item categories-field__list__list-item"
                key={_.uniqueId()}
              >
              {renderCategoryButton(element)}
              <strong className={cn({ [`${(categoryList[element]) === '+' ? 'success' : 'danger'}`]: true })}>
                {list.filter(({ category }) => category.categoryName === element)
                  .reduce((acc, { money }) => ((categoryList[element] === '-') ? acc - money : acc + money), 0) || 0}
              </strong>
            </li>))}
          <li
            className="list-group-item categories-field__list__list-item-last mt-1"
          >
            <h4>Total</h4>
            <strong className="categories-field__list__list-item-last__total-value">
              { list.reduce((acc, { category, money }) => {
                if (category.categoryName === 'Start value' || category.categorySign === '+') {
                  return acc + money;
                }
                return acc - money;
              }, 0) || 0 }
            </strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Categories);
