import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calc from './MoneyCalc/Calc';
import Note from './Notebook/Note';
import Header from './Header';

const App = () => (
  <div className='app'>
    <div className='container'>
      <div className="row justify-content-center main-row">
        <div className="col align-self-start header">
          <Header />
        </div>
        <div className="col-7 align-self-start main">
          <Switch>
            <Route path={'/'} exact component={Calc} />
            <Route path={'/notebook'} component={Note} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
);

export default App;
