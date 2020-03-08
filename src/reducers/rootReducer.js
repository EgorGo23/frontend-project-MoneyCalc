import { combineReducers } from 'redux';
import calc from './calc/calcReducer';
import notebook from './notebook/notebookReducer';

export default combineReducers({
  notebook,
  calc,
});
