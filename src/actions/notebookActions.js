export const NOTEBOOK_CHANGE_NOTE_TEXT = 'NOTEBOOK_CHANGE_NOTE_TEXT';
export const NOTEBOOK_ADD_ITEM = 'CALC_ADD_ITEM';
export const NOTEBOOK_CLEAR_INPUT_FIELD = 'NOTEBOOK_CLEAR_INPUT_FIELD';
export const NOTEBOOK_REMOVE_ITEM = 'NOTEBOOK_REMOVE_ITEM';

export const changeNoteText = (note) => ({
  type: NOTEBOOK_CHANGE_NOTE_TEXT,
  payload: {
    note,
  },
});

export const addItem = (item) => ({
  type: NOTEBOOK_ADD_ITEM,
  payload: {
    item,
  },
});

export const clearInputText = () => ({
  type: NOTEBOOK_CLEAR_INPUT_FIELD,
});
