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
  handleChangeDate = ({ target }) => {
    const { setDateText } = this.props;
    setDateText(target.value);
  }

  handleChangeMoney = ({ target }) => {
    const { setMoneyText } = this.props;
    setMoneyText(target.value);
  }

  handleAddItem = () => {
    const { addItem, currentInputValues, clearInputText } = this.props;
    addItem({
      id: _.uniqueId(),
      category: 'start-value',
      date: currentInputValues.currentDate,
      money: currentInputValues.currentMoney,
    });
    clearInputText();
  }

  render() {
    const { currentDate, currentMoney } = this.props.currentInputValues;
    const { list } = this.props;
    return (
      <div className="row form-panel">
        <div className="col align-self-center form-panel__fields">
          <form>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Date" value={currentDate} onChange={this.handleChangeDate} />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Money" value={currentMoney} onChange={this.handleChangeMoney} />
              </div>
              <div className="col form-panel__fields__btn-add-field">
                {(list.length) ? (
                  <button type="button" onClick={this.handleAddItem} className="btn btn-primary form-panel__fields__btn-add-field__btn-add" disabled>Add start value</button>
                ) : (
                  <button type="button" onClick={this.handleAddItem} className="btn btn-primary form-panel__fields__btn-add-field__btn-add">Add start value</button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(FormPanel);
