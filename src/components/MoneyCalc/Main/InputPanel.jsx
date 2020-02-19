import React, { Component } from 'react';

class FormPanel extends Component {
  render() {
    return (
      <div className="row form-panel">
        <div className="col-8 align-self-center form-panel__fields">
          <form>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Date" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Money" />
              </div>
              <div className="col align-self-center form-panel__fields__btn-add-field">
                <button type="button" className="btn btn-primary form-panel__fields__btn-add-field__btn-add">Add start value</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormPanel;
