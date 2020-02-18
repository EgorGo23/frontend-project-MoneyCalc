import React, { Component } from 'react';
import Expenditure from './Expenditure'
import Categories from './Categories';

class ExpenditureAndCategoriesFields extends Component {
  render() {
    return (
      <div className="row expenditure-categories-fields">
          <Expenditure />
          <Categories />
      </div>
    );
  }
}

export default ExpenditureAndCategoriesFields;
