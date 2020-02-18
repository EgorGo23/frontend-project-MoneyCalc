import React, { Component, Fragment } from 'react';
import InputPanel from './Main/InputPanel/InputPanel';
import ExpenditureCategoriesFields from './Main/ExpenditureCategoriesFields/ExpenditureCategoriesFields';

class Calc extends Component {
  render() {
    return (
      <Fragment>
        <InputPanel />
        <ExpenditureCategoriesFields />
      </Fragment>
    );
  }
}

export default Calc;
