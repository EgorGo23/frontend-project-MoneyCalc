import React, { Component, Fragment } from 'react';
import FormPanel from './Main/FormPanel';
import ExpensesIncomeList from './Main/ExpensesIncomeList';
import Categories from './Main/Categories';

class Calc extends Component {
  render() {
    return (
      <Fragment>
        <FormPanel />
        <div className="row expensesIncomeList-categories-fields">
          <ExpensesIncomeList />
          <Categories />
        </div>
      </Fragment>
    );
  }
}

export default Calc;
