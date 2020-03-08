/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import * as actions from '../../../actions/notebookActions';

const mapStateToProps = ({ notebook }) => {
  const props = {
    currentInputData: notebook.currentInputData,
    list: notebook.noteList,
  };
  return props;
};

const actionCreators = {
  removeItem: actions.removeItem,
  clearList: actions.clearList,
  clearInputFields: actions.clearInputFields,
  toggleCheckbox: actions.toggleCheckbox,
};


export class Notes extends Component {
  removeItemHandler = (id) => {
    const { removeItem } = this.props;
    removeItem(id);
  }

  toggleCheckboxHandler = (id) => {
    const { toggleCheckbox } = this.props;
    toggleCheckbox(id);
  }

  clearListHandler = () => {
    const { clearList, clearInputFields } = this.props;
    clearList();
    clearInputFields();
  }

  render() {
    const { list } = this.props;

    return (
      <div className="row notebookList-field">
        <div className="col d-flex align-items-center justify-content-between flex-column">
          <ul className="list-group list-group-flush notebookList-field__list w-100">
            {list.map(({ id, note }) => (
              <li
                key={uniqueId()}
                className="list-group-item notebookList-field__list__list-item pl-0 pr-1"
              >
                <div className="custom-control custom-checkbox ml-1">
                  <input className="custom-control-input" type="checkbox" id={id} onClick={() => this.toggleCheckboxHandler(id)}/>
                  <label className="custom-control-label" htmlFor={id}>{note}</label>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary btn-custom"
                  onClick={() => this.removeItemHandler(id)}
                >
                  &ndash;
                      </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-outline-primary btn-lg btn-custom mb-3"
            onClick={this.clearListHandler}
          >
            Reset
          </button>
        </div>
      </div>


    );
  }
}

export default connect(mapStateToProps, actionCreators)(Notes);
