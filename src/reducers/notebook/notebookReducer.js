import { combineReducers } from 'redux';
import {
  NOTEBOOK_CHANGE_NOTE_TEXT,
  NOTEBOOK_CLEAR_INPUT_FIELDS,
  NOTEBOOK_ADD_ITEM,
  NOTEBOOK_REMOVE_ITEM,
  NOTEBOOK_CLEAR_LIST,
  NOTEBOOK_TOGGLE_CHECKBOX,
} from '../../actions/notebookActions';


const defaultStateCurrentInput = {
  noteText: '',
};

const defaultStateList = [];

export const currentInputDataReducer = (state = defaultStateCurrentInput, { type, payload }) => {
  switch (type) {
    case (NOTEBOOK_CHANGE_NOTE_TEXT): {
      return {
        ...state,
        noteText: payload.text,
      };
    }

    case (NOTEBOOK_CLEAR_INPUT_FIELDS): {
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

    case (NOTEBOOK_TOGGLE_CHECKBOX): {
      const currentElementIndex = state.findIndex((element) => element.id === payload.id);
      const newItem = {
        ...state[currentElementIndex],
        completed: !state[currentElementIndex].completed,
      };

      return [
        ...state.slice(0, currentElementIndex),
        newItem,
        ...state.slice(currentElementIndex + 1),
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
