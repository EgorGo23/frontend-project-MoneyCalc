import React, { Component } from 'react';

class InputFiels extends Component {
  render() {
    return (
        <div className="col-8 align-self-center input-panel__fields">
          <form className="input-grid">
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Date" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Money" />
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default InputFiels;