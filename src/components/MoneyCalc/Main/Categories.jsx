import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import cn from 'classnames';
import * as actions from '../../../actions/calcActions';

const categoryList = {
  Food: '-',
  'Payment of an apartment': '-',
  'General expenses': '-',
  Prepayment: '+',
  Salary: '+',
};

const mapStateToProps = ({ calc }) => {
  const props = {
    currentInputData: calc.currentInputData,
    list: calc.expensesIncomeList,
  };
  
  return props;
};

const actionCreators = {
  addItem: actions.addItem,
  clearInputFields: actions.clearInputFields,
};

export class Categories extends Component {
  addItemHandler = (categoryName) => {
    const {
      addItem, currentInputData, clearInputFields,
    } = this.props;
    addItem({
      id: uniqueId(),
      category: {
        categoryName,
        categorySign: categoryList[categoryName],
      },
      date: currentInputData.dateText,
      money: +currentInputData.moneyText,
    });
    clearInputFields();
  }

  render() {
    const { list, currentInputData } = this.props;

    const renderCategoryButton = (categoryName) => (
      (currentInputData.dateText && currentInputData.moneyText) ? (
        <button
          type="button"
          className={cn({
            btn: true,
            'categories-field__list__list-item__category-btn': true,
            [`btn-${(categoryList[categoryName]) === '+' ? 'success' : 'danger'}`]: true,
          })}
          onClick={() => this.addItemHandler(categoryName)}
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
          onClick={() => this.addItemHandler(categoryName)}
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
                key={uniqueId()}
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
