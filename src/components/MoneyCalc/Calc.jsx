import React, { Component } from 'react';
import ExpensesIncomeList from './Main/ExpensesIncomeList';
import Categories from './Main/Categories';
import Form from './Main/Form';
import Header from '../Header';

class Calc extends Component {
  render() {
    return (
      <div className='App-moneyCalc'>
        <div className="interfaceWrapper-moneyCalc d-flex flex-column">
          <Header />
          <div className="MainContent-moneyCalc container">
            <Form />
            <div className="row row_content">
              <Categories />
              <ExpensesIncomeList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
