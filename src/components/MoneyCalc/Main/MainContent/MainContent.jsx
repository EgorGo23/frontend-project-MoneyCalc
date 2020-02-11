import React, { Component } from 'react';
import Expenditure from './Expenditure'
import Categories from './Categories';

class MainContent extends Component {
  render() {
    return (
      <div className="row main-content">
          <Expenditure />
          <Categories />
      </div>
    );
  }
}

export default MainContent;
