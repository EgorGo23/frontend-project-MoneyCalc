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
  changeDateText: actions.changeDateText,
  changeMoneyText: actions.changeMoneyText,
  addItem: actions.addItem,
  clearInputFields: actions.clearInputFields,
};

export class Form extends Component {
  changeDateTextHandler = ({ target }) => {
    const { changeDateText } = this.props;

    if (target.value.length <= 8) {
      changeDateText(target.value);
    }
  }

  changeMoneyTextHandler = ({ target }) => {
    const { changeMoneyText } = this.props;

    if (target.value === '') {
      changeMoneyText('');
    }

    if (!+target.value) {
      return;
    }

    if (+target.value > 10 ** 6) {
      return;
    }

    changeMoneyText(+target.value);
  }

  addItemHandler = (event) => {
    event.preventDefault();

    const {
      currentInputData, list, addItem, clearInputFields,
    } = this.props;

    if (!currentInputData.dateText || !currentInputData.moneyText) {
      return;
    }

    if (list.length !== 0) {
      return;
    }

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
        <button type="submit" className="btn btn-add_disabled">Add start value</button>
      ) : (
        <button type="submit" onClick={this.addItemHandler} className="btn btn-add">Add start value</button>
      )
    );

    return (
      <form className="form-moneyCalc d-flex justify-content-md-between pt-2" onSubmit={this.addItemHandler}>
        <div className="row justify-content-md-between justify-content-sm-center">
            <div className="col">
              <input type="text" className="form-control" placeholder="Date" value={currentInputData.dateText} onChange={this.changeDateTextHandler} />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Money" value={currentInputData.moneyText} onChange={this.changeMoneyTextHandler} />
            </div>
        </div>
        {renderStartButton()}
      </form>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Form);
