import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const props = {
    date: state.date,
    money: state.money,
    category: state.category,
  }

  return props;
}


class Expenditure extends Component {
  render() {
    const { date, money, category } = this.props;

    return (
        <div className="col-7 expenditure-field">
          <ul className="list-group list-group-flush expenditure-field__list">
            <li
              className="list-group-item expenditure-field__list__list-item"
            >
              <div>
                <strong className='expenditure-field__list__list-item__category-name'>{category}</strong>
                <span className="expenditure-field__list__list-item__date">{date}</span>
                <strong className="expenditure-field__list__list-item__money">{money}</strong>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
              >
                &ndash;
              </button>
            </li>
          </ul>

          <button type="button" className="btn btn-outline-danger mb-4 btn-lg btn-reset">Reset</button>
        </div>
    );
  }
}

export default connect(mapStateToProps)(Expenditure);
