import { combineReducers } from 'redux';
import {
  NOTEBOOK_CHANGE_TEXT,
  NOTEBOOK_CLEAR_INPUT_FIELD,
  NOTEBOOK_ADD_ITEM,
  NOTEBOOK_REMOVE_ITEM,
  NOTEBOOK_CLEAR_LIST,
} from '../../actions/notebookActions';


const defaultStateCurrentInput = {
  noteText: '',
};

const defaultStateList = [];

export const currentInputDataReducer = (state = defaultStateCurrentInput, { type, payload }) => {
  switch (type) {
    case (NOTEBOOK_CHANGE_TEXT): {
      return {
        ...state,
        noteText: payload.note,
      };
    }
    case (NOTEBOOK_CLEAR_INPUT_FIELD): {
      return defaultStateCurrentInput;
    }
    default: {
      return state;
    }
  }
};

export const noteListReducer = (state = defaultStateList, { type, payload }) => {
  switch (type) {
    case (NOTEBOOK_ADD_ITEM): {
      return [
        payload.item,
        ...state,
      ];
    }

    case (NOTEBOOK_REMOVE_ITEM): {
      return state.filter((element) => element.id !== payload.id);
    }

    case (NOTEBOOK_CLEAR_LIST): {
      return defaultStateList;
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  currentInputData: currentInputDataReducer,
  noteList: noteListReducer,
});
