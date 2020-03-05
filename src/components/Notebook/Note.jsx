import React, { Component, Fragment } from 'react';
import Form from './Main/Form';
import Notes from './Main/Notes';


class MainNote extends Component {
  render() {
    return (
      <Fragment>
        <Form />
        <Notes />
      </Fragment>
    );
  }
}

export default MainNote;
