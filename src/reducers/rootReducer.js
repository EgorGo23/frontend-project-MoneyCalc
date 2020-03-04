import calc from './calc/calcReducer';
import notebook from './notebook/notebookReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    calc,
    notebook,
});