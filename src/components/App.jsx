import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calc from './MoneyCalc/Calc';
import Note from './Notebook/Note';

const App = () => (
  <Switch>
    <Route path={'/'} exact component={Calc} />
    <Route path={'/notebook'} component={Note} />
  </Switch>
);

export default App;
