import React, { Component, Fragment } from 'react';
import ExpenditureAndCategoriesFields from './Main/ExpenditureAndCategoriesFields/ExpenditureAndCategoriesFields';
import FormPanel from './Main/InputPanel';

class Calc extends Component {
  render() {
    return (
      <Fragment>
        <FormPanel />
        <ExpenditureAndCategoriesFields />
      </Fragment>
    );
  }
}

export default Calc;
