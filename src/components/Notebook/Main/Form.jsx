import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
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

export class Form extends Component {
  changeNoteTextHandler = ({ target }) => {
    const { changeNoteText } = this.props;
    changeNoteText(target.value);
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { currentInputData, addItem, clearInputField } = this.props;
    if (!currentInputData.noteText) {
      return;
    }
    addItem({
      id: _.uniqueId(),
      note: currentInputData.noteText || '',
    });
    clearInputField();
  }

  render() {
    const { currentInputData } = this.props;
    return (
      <div className="row form-panel">
        <div className="col align-self-center form-panel__fields">
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Enter note"
                  value={currentInputData.noteText}
                  onChange={this.changeNoteTextHandler}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Form);
