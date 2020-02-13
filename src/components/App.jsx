import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calc from './MoneyCalc/Calc';
import Note from './Notebook/Note';


const App = () => (
  <div className='app'>
    <div className='container'>
      <div className="row align-items-center justify-content-center content">
        <div className="col-7 col-content">
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
