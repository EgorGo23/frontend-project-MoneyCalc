import { NOTEBOOK_CHANGE_NOTE_TEXT, NOTEBOOK_CLEAR_INPUT_FIELD } from '../../actions/notebookActions';


const defaultStateCurrentInput = {
  currentInputText: '',
};

const defaultStateList = [];

export const currentInputDataReducer = (state = defaultStateCurrentInput, { type, payload }) => {
  switch (type) {
    case (NOTEBOOK_CHANGE_NOTE_TEXT): {
      return {
        ...state,
        currentInputText: payload.note,
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
