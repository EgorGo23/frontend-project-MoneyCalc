export const NOTEBOOK_CHANGE_NOTE_TEXT = 'NOTEBOOK_CHANGE_NOTE_TEXT';
export const NOTEBOOK_CLEAR_INPUT_FIELDS = 'NOTEBOOK_CLEAR_INPUT_FIELDS';
export const NOTEBOOK_ADD_ITEM = 'NNOTEBOOK_ADD_ITEM';
export const NOTEBOOK_REMOVE_ITEM = 'NOTEBOOK_REMOVE_ITEM';
export const NOTEBOOK_CLEAR_LIST = 'NOTEBOOK_CLEAR_LIST';
export const NOTEBOOK_TOGGLE_CHECKBOX = 'NOTEBOOK_TOGGLE_CHECKBOX';

export const changeNoteText = (text) => ({
  type: NOTEBOOK_CHANGE_NOTE_TEXT,
  payload: {
    text,
  },
});

export const clearInputFields = () => ({
  type: NOTEBOOK_CLEAR_INPUT_FIELDS,
});

export const addItem = (item) => ({
  type: NOTEBOOK_ADD_ITEM,
  payload: {
    item,
  },
});

export const removeItem = (id) => ({
  type: NOTEBOOK_REMOVE_ITEM,
  payload: {
    id,
  },
});

export const clearList = () => ({
  type: NOTEBOOK_CLEAR_LIST,
});

export const toggleCheckbox = (id) => ({
  type: NOTEBOOK_TOGGLE_CHECKBOX,
  payload: {
    id,
  },
});
