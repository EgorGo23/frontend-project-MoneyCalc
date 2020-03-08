export const NOTE_CHANGE_TEXT = 'NOTE_CHANGE_TEXT';
export const NOTE_CLEAR_INPUT_FIELDS = 'NOTE_CLEAR_INPUT_FIELDS';
export const NOTE_ADD_ITEM = 'NOTE_ADD_ITEM';
export const NOTE_REMOVE_ITEM = 'NOTE_REMOVE_ITEM';
export const NOTE_CLEAR_LIST = 'NOTE_CLEAR_LIST';
export const NOTE_TOGGLE_CHECKBOX = 'NOTE_TOGGLE_CHECKBOX';


export const changeText = (text) => ({
  type: NOTE_CHANGE_TEXT,
  payload: {
    text,
  },
});

export const clearInputFields = () => ({
  type: NOTE_CLEAR_INPUT_FIELDS,
});

export const addItem = (item) => ({
  type: NOTE_ADD_ITEM,
  payload: {
    item,
  },
});

export const removeItem = (id) => ({
  type: NOTE_REMOVE_ITEM,
  payload: {
    id,
  },
});

export const clearList = () => ({
  type: NOTE_CLEAR_LIST,
});

export const toggleCheckbox = (id) => ({
  type: NOTE_TOGGLE_CHECKBOX,
  payload: {
    id,
  },
});
