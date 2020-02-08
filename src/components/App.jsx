import React, { Component } from 'react';
import Navbar from './Navbar.jsx';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className='container pt-4'>
          <h1>Hello</h1>
        </div>
      </>
    );
  }
}

export default App;
