/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
import React, { Component } from 'react';


export class Form extends Component {
  submitHandler = (event) => {
    event.preventDefault();
  }
  
  render() {
    return (
        <form onSubmit={this.submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter note"
                />
            </div>
        </form>
    );
  }
}