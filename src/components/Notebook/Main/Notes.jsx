/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/notebookActions';


const mapStateToProps = ({ notebook }) => {
  const props = {
    currentInputData: notebook.currentInputData,
    list: notebook.noteList,
  };
  console.log(props);
  return props;
};

const actionCreators = {
  changeNoteText: actions.changeNoteText,
  addItem: actions.addItem,
  clearInputField: actions.clearInputField,
};


export class Notes extends Component {
  render() {
    const { list } = this.props;

    return (
      <div className="row">
        <div className="col">
            <div className="row">
              <div className="col notebookList-field">
                <ul className="list-group list-group-flush notebookList-field__list">
                  {list.map(({ id, note }) => (
                    <li key={id} className="list-group-item">{note}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row row-button align-items-end">
              <div className="col d-flex justify-content-center col-button">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg btn-reset"
                  onClick={this.clearListHandler}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
      </div>


    );
  }
}

export default connect(mapStateToProps, actionCreators)(Notes);
