import React, { Component } from 'react';
import '../../public/styles/App.scss';

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='card'>
        <div className="card-header">
          Featured
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    );
  }
}

export default App;
