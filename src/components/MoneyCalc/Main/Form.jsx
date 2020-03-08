import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import * as actions from '../../../actions/calcActions';

const mapStateToProps = ({ calc }) => {
  const props = {
    currentInputData: calc.currentInputData,
    list: calc.expensesIncomeList,
  };

  return props;
};

const actionCreators = {
  changeText: actions.changeText,
  addItem: actions.addItem,
  clearInputFields: actions.clearInputFields,
};

export class Form extends Component {
  changeDateTextHandler = ({ target }) => {
    const { changeText } = this.props;
    changeText(target.value);
  }

  changeMoneyTextHandler = ({ target }) => {
    const { changeText } = this.props;

    if (+target.value) {
      changeText(+target.value);
    } else {
      changeText(null);
    }
  }

  addItemHandler = () => {
    const { addItem, currentInputData, clearInputFields } = this.props;
    addItem({
      id: uniqueId(),
      category: {
        categoryName: 'Start value',
        categorySign: '',
      },
      date: currentInputData.dateText,
      money: +currentInputData.moneyText,
    });
    clearInputFields();
  }

  render() {
    const { list, currentInputData } = this.props;

    const renderStartButton = () => (
      (list.length || !(currentInputData.dateText && currentInputData.moneyText)) ? (
        <button type="button" onClick={this.addItemHandler} className="btn btn-primary form-panel__fields__btn-add-field__btn-add_disabled" disabled>Add start value</button>
      ) : (
        <button type="button" onClick={this.addItemHandler} className="btn btn-primary form-panel__fields__btn-add-field__btn-add">Add start value</button>
      )
    );

    return (
      <div className="row form-panel">
        <div className="col align-self-center form-panel__fields">
          <form>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Date" value={currentInputData.dateText} onChange={this.changeDateTextHandler} />
                <small id="dateHelp" className="form-text text-muted">Enter the date in the format &apos;xx.xx.xx&apos;</small>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Money" value={currentInputData.moneyText} onChange={this.changeMoneyTextHandler} />
                <small id="moneyHelp" className="form-text text-muted">Enter a numerical value</small>
              </div>
              <div className="col form-panel__fields__btn-add-field">
                {renderStartButton()}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Form);
