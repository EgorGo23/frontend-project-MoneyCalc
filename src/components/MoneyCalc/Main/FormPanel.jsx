import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../../actions/calcActions';

const mapStateToProps = (state) => {
  const props = {
    currentInputValues: state.currentInputData_Calc,
    list: state.expensesIncomeList_Calc,
  };
  return props;
};

const actionCreators = {
  setDateText: actions.setDateText,
  setMoneyText: actions.setMoneyText,
  addItem: actions.addItem,
  clearInputText: actions.clearInputText,
};

class FormPanel extends Component {
  handleChangeDateText = ({ target }) => {
    const { setDateText } = this.props;
    setDateText(target.value);
  }

  handleChangeMoneyText = ({ target }) => {
    const { setMoneyText } = this.props;
    setMoneyText(target.value);
  }

  handleAddItem = () => {
    const { addItem, currentInputValues, clearInputText } = this.props;
    addItem({
      id: _.uniqueId(),
      category: {
        categoryName: 'Start value',
        categorySign: '',
      },
      date: currentInputValues.currentDate,
      money: +currentInputValues.currentMoney,
    });
    clearInputText();
  }

  render() {
    const { list, currentInputValues } = this.props;

    const renderStartButton = () => (
      (list.length || !(currentInputValues.currentDate && currentInputValues.currentMoney)) ? (
        <button type="button" onClick={this.handleAddItem} className="btn btn-primary form-panel__fields__btn-add-field__btn-add_disabled" disabled>Add start value</button>
      ) : (
        <button type="button" onClick={this.handleAddItem} className="btn btn-primary form-panel__fields__btn-add-field__btn-add">Add start value</button>
      )
    );

    return (
      <div className="row form-panel">
        <div className="col align-self-center form-panel__fields">
          <form>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Date" value={currentInputValues.currentDate} onChange={this.handleChangeDateText} />
                <small id="dateHelp" className="form-text text-muted">Enter the date in the format &apos;xx.xx.xx&apos;</small>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Money" value={currentInputValues.currentMoney} onChange={this.handleChangeMoneyText} />
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

export default connect(mapStateToProps, actionCreators)(FormPanel);
