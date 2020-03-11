import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calc from './MoneyCalc/Calc';
import Note from './Notebook/Note';
import Header from './Header';
import Form from './MoneyCalc/Main/Form';

const App = () => (
  <div className='App'>
    <div className="interfaceWrapper d-flex flex-column">
      <Header />
      <div className="MainContent container">
        <Switch>
          <Route path={'/'} exact component={Calc} />
          <Route path={'/notebook'} component={Note} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
