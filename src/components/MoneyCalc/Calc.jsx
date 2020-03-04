import React, { Component, Fragment } from 'react';
import Form from './Main/Form';
import ExpensesIncomeList from './Main/ExpensesIncomeList';
import Categories from './Main/Categories';

class Calc extends Component {
  render() {
    return (
      <Fragment>
        <Form />
        <div className="row expensesIncomeList-categories-fields">
          <ExpensesIncomeList />
          <Categories />
        </div>
      </Fragment>
    );
  }
}

export default Calc;
