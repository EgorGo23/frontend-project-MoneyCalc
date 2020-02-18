import React, { Component } from 'react';
import Expenditure from './Expenditure'
import Categories from './Categories';

class ExpenditureCategoriesFields extends Component {
  render() {
    return (
      <div className="row expenditure-categories-fields">
          <Expenditure />
          <Categories />
      </div>
    );
  }
}

export default ExpenditureCategoriesFields;
