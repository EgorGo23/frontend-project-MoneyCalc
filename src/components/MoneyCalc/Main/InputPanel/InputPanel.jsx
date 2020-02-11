import React, { Component } from 'react';
import BtnStart from './BtnStart';
import InputFiels from './InputFields';

class InputPanel extends Component {
  render() {
    return (
      <div className="row input-panel">
        <InputFiels />
        <BtnStart />
      </div>
    );
  }
}

export default InputPanel;
