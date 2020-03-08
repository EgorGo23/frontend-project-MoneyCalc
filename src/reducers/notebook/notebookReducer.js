import { combineReducers } from 'redux';
import {
  NOTE_CHANGE_TEXT,
  NOTE_CLEAR_INPUT_FIELDS,
  NOTE_ADD_ITEM,
  NOTE_REMOVE_ITEM,
  NOTE_CLEAR_LIST,
  NOTE_TOGGLE_CHECKBOX,
} from '../../actions/notebookActions';


const defaultStateCurrentInput = {
  noteText: '',
};

const defaultStateList = [];

export const currentInputDataReducer = (state = defaultStateCurrentInput, { type, payload }) => {
  switch (type) {
    case (NOTE_CHANGE_TEXT): {
      return {
        ...state,
        noteText: payload.text,
      };
    }

    case (NOTE_CLEAR_INPUT_FIELDS): {
      return defaultStateCurrentInput;
    }

    default: {
      return state;
    }
  }
};

export const noteListReducer = (state = defaultStateList, { type, payload }) => {
  switch (type) {
    case (NOTE_ADD_ITEM): {
      return [
        payload.item,
        ...state,
      ];
    }

    case (NOTE_TOGGLE_CHECKBOX): {
      const currentElementInd = state.findIndex((element) => element.id === payload.id);
      const newItem = { ...state[currentElementInd], completed: !state[currentElementInd].completed };

      return [
        ...state.slice(0, currentElementInd),
        newItem,
        ...state.slice(currentElementInd + 1),
      ];
    }

    case (NOTE_REMOVE_ITEM): {
      return state.filter((element) => element.id !== payload.id);
    }

    case (NOTE_CLEAR_LIST): {
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
