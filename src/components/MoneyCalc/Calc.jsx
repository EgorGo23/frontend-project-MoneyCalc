import React, { Component, Fragment } from 'react';
import InputPanel from './Main/InputPanel/InputPanel';
import MainContent from './Main/MainContent/MainContent';
import Header from '../Header';

class MainCalc extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <InputPanel />
        <MainContent />
      </Fragment>
    );
  }
}

export default MainCalc;
