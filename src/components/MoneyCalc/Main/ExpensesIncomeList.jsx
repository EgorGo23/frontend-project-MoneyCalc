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
  deleteItem: actions.deleteItem,
};

class ExpensesIncomeList extends Component {
  handleDeleteItem = (id) => {
    const { deleteItem } = this.props;
    deleteItem(id);
  }

  render() {
    const { list } = this.props;
    return (
        <div className="col-7 expensesIncomeList-field d-flex flex-column justify-content-between align-items-center">
          <ul className="list-group list-group-flush expensesIncomeList-field__list">
            {list.map((element) => (
              <li
              className="list-group-item expensesIncomeList-field__list__list-item px-0"
              key={element.id}
              >
                <div className="w-90 d-flex justify align-items-center justify-content-between">
                  <strong className="expensesIncomeList-field__list__list-item__category-name">{element.category}</strong>
                  <span className="expensesIncomeList-field__list__list-item__date">{element.date}</span>
                  <strong className="expensesIncomeList-field__list__list-item__money">{element.money}</strong>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={this.handleDeleteItem(element.id)}
                >
                  &ndash;
                </button>
            </li>
            ))}

          </ul>
          <button type="button" className="btn btn-outline-danger mb-4 btn-lg btn-reset">Reset</button>
        </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(ExpensesIncomeList);
