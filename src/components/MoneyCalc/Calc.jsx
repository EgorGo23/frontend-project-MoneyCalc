import React, { Component, Fragment } from 'react';
import InputPanel from './Main/InputPanel/InputPanel';
import ExpenditureAndCategoriesFields from './Main/ExpenditureAndCategoriesFields/ExpenditureAndCategoriesFields';

class Calc extends Component {
  render() {
    return (
      <Fragment>
        <InputPanel />
        <ExpenditureAndCategoriesFields />
      </Fragment>
    );
  }
}

export default Calc;
