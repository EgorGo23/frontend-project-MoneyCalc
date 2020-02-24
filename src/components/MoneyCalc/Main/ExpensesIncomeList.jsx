import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/calcActions';

const mapStateToProps = (state) => {
  const props = {
    currentInputValues: state.currentInputData_Calc,
    list: state.expensesIncomeList_Calc,
  }; 
  
  return props;
};

const actionCreators = {
  removeItem: actions.removeItem,
  clearList: actions.clearList,
};

class ExpensesIncomeList extends Component {
  handleRemoveItem = (id) => {
    const { removeItem } = this.props;
    removeItem(id);
  }

  handleClearList = () => {
    const { clearList } = this.props;
    clearList();
  }

  render() {
    const { list } = this.props;
    return (
      <div className="col-7 expensesIncomeList-field">
        <ul className="list-group list-group-flush expensesIncomeList-field__list">
          {list.map((element) => (
            <li
              className="list-group-item expensesIncomeList-field__list__list-item pl-0 pr-1"
              key={element.id}
            >
              <div className="expensesIncomeList-field__list__list-item__content-field">
                <strong className="expensesIncomeList-field__list__list-item__content-field__category-name">{element.category.categoryName}</strong>
                <span className="expensesIncomeList-field__list__list-item__content-field__date">{element.date}</span>
                <strong className="expensesIncomeList-field__list__list-item__content-field__money">{element.money}</strong>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => this.handleRemoveItem(element.id)}
              >
                &ndash;
              </button>
            </li>
          ))}
        </ul>
        <button 
          type="button" 
          className="btn btn-outline-primary mb-4 btn-lg btn-reset" 
          onClick={this.handleClearList}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(ExpensesIncomeList);
