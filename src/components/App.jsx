import React from 'react';
import Navbar from './Navbar.jsx';

const App = () => (
  <div className='container app'>
    <div className="row align-items-center justify-content-center content">
      <div className="col-7 col-content">
        <div className="row btn-select">
          <div className="col btn-todo"></div>
          <div className="col btn-blq"></div>
        </div>
        <div className="row top-panel">
          <div className="col-8 left"></div>
          <div className="col right"></div>
        </div>
        <div className="row main">
          <div className="col-7 left"></div>
          <div className="col right"></div>
        </div>
      </div>
    </div>
  </div>
);
export default App;
