import React, { Component } from 'react';
import Form from './Main/Form';
import Notes from './Main/Notes';
import Header from '../Header';

class MainNote extends Component {
  render() {
    return (
      <div className='App-notebook'>
        <div className="interfaceWrapper-notebook d-flex flex-column">
          <Header />
          <div className="MainContent-notebook container">
            <Form />
            <Notes />
          </div>
        </div>
      </div>
    );
  }
}

export default MainNote;
