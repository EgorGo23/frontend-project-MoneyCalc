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
  changeText: actions.changeText,
  addItem: actions.addItem,
  clearInputFields: actions.clearInputFields,
};

export class Form extends Component {
  changeNoteTextHandler = ({ target }) => {
    const { changeText } = this.props;
    changeText(target.value);
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { currentInputData, addItem, clearInputFields } = this.props;
    if (!currentInputData.noteText) {
      return;
    }

    addItem({
      id: uniqueId(),
      note: currentInputData.noteText || '',
      completed: false,
    });

    clearInputFields();
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
                  placeholder="Enter Note"
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
