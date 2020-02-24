import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/calcActions';
import _ from 'lodash';

const categoryList = {
  'Food': '-',
  'Payment of an apartment': '-',
  'Prepayment': '+',
  'Salary': '+',
  'General expenses': '-',
}

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

class Categories extends Component {
  handleAddItem = (categoryName) => {
    const { addItem, currentInputValues, clearInputText } = this.props;
    addItem({
      id: _.uniqueId(),
      category: {
        categoryName, 
        categorySign: categoryList[categoryName],
      },
      date: currentInputValues.currentDate,
      money: currentInputValues.currentMoney,
    });
    clearInputText();
  }
  
  render() {
    const { list } = this.props;
    
    return (
      <div className="col categories-field">
        <ul className="list-group list-group-flush categories-field__list">
          {Object.keys(categoryList).map((element) => (
          <li
            className="list-group-item categories-field__list__list-item"
            key={_.uniqueId()}
          >
            <button
              type="button"
              className="btn btn-danger categories-field__list__list-btn"
              onClick={() => this.handleAddItem(element)}
            >
              {element}
            </button>
            <strong>
              {list.filter(({ category }) => category.categoryName === element).reduce((acc, element) => acc - +element.money, 0) || 0}
            </strong>
          </li>
          ))}
          <li
            className="list-group-item categories-field__list__list-item-last mt-1"
          >
            <h4>Total</h4>
            <strong className="categories-field__list__list-item-last__total-value">
              {list.reduce((acc, element) => acc + +element.money, 0) || 0}
            </strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Categories);


// const func = (listCat) => {
    //   const arrOfLi = [];

    //   for(let key in listCat) {
    //     arrOfLi.push(
    //       (
    //       <li
    //         className="list-group-item categories-field__list__list-item"
    //       >
    //         <button
    //           type="button"
    //           className="btn btn-danger categories-field__list__list-btn"
    //           onClick={() => this.handleAddItem(key)}
    //         >
    //           {key}
    //         </button>
    //         <strong>
    //           {list.filter(({ category }) => category.categoryName === key).reduce((acc, element) => acc - +element.money, 0) || 0}
    //         </strong>
    //       </li>
    //       )
    //     )
    //   }

    //   return arrOfLi;
    // }


/*
return (
      <div className="col categories-field">
        <ul className="list-group list-group-flush categories-field__list">
          <li
            className="list-group-item categories-field__list__list-item"
          >
            <button
              type="button"
              className="btn btn-danger categories-field__list__list-btn"
              onClick={() => this.handleAddItem('Food')}
            >
              Food
            </button>
            <strong>
              {list.filter((element) => element.category === 'Food').reduce((acc, element) => acc - +element.money, 0) || 0}
            </strong>
          </li>
          <li
            className="list-group-item categories-field__list__list-item"
          >
            <button
              type="button"
              className="btn btn-danger categories-field__list__list-btn"
              onClick={() => this.handleAddItem('Payment of an apartment')}
            >
              Payment of an apartment
            </button>
            <strong>
              {list.filter((element) => element.category === 'Payment of an apartment').reduce((acc, element) => acc - +element.money, 0) || 0}
            </strong>
          </li>
          <li
            className="list-group-item categories-field__list__list-item"
          >
            <button
              type="button"
              className="btn btn-success categories-field__list__list-btn"
              onClick={() => this.handleAddItem('Prepayment')}
            >
              Prepayment
            </button>
            <strong>
              {list.filter((element) => element.category === 'Prepayment').reduce((acc, element) => acc + +element.money, 0) || 0}
            </strong>
          </li>
          <li
            className="list-group-item categories-field__list__list-item"
          >
            <button
              type="button"
              className="btn btn-success categories-field__list__list-btn"
              onClick={() => this.handleAddItem('Salary')}
            >
              Salary
            </button>
            <strong>
              {list.filter((element) => element.category === 'Salary').reduce((acc, element) => acc + +element.money, 0) || 0}
            </strong>
          </li>
          <li
            className="list-group-item categories-field__list__list-item" 
          >
            <button
              type="button"
              className="btn btn-danger categories-field__list__list-btn"
              onClick={() => this.handleAddItem('General expenses')}
            >
              General expenses
            </button>
            <strong>
              {list.filter((element) => element.category === 'General expenses').reduce((acc, element) => acc + +element.money, 0) || 0}
            </strong>
          </li>
          <li
            className="list-group-item categories-field__list__list-item-last mt-1"
          >
            <h4>Total</h4>
            <strong className="categories-field__list__list-item-last__total-value">
              {list.reduce((acc, element) => acc + +element.money, 0) || 0}
            </strong>
          </li>
        </ul>
      </div>
  );
*/