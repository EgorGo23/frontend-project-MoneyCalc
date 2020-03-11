import React, { Component, Fragment } from 'react';
import ExpensesIncomeList from './Main/ExpensesIncomeList';
import Categories from './Main/Categories';
import Form from './Main/Form';

class Calc extends Component {
  render() {
    return (
      <Fragment>
          <Form />
          <div className="row row_content">
            <Categories />
            <ExpensesIncomeList />
          </div>
      </Fragment>
    );
  }
}

export default Calc;
