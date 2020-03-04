export const CALC_CHANGE_DATE_TEXT = 'CALC_CHANGE_DATE_TEXT';
export const CALC_CHANGE_MONEY_TEXT = 'CALC_CHANGE_MONEY_TEXT';
export const CALC_CLEAR_INPUT_FIELDS = 'CALC_CLEAR_INPUT_FIELDS';
export const CALC_ADD_ITEM = 'CALC_ADD_ITEM';
export const CALC_REMOVE_ITEM = 'CALC_REMOVE_ITEM';
export const CALC_CLEAR_LIST = 'CALC_CLEAR_LIST';
export const CALC_SET_CATEGORY = 'CALC_SET_CATEGORY';


export const changeDateText = (date) => ({
  type: CALC_CHANGE_DATE_TEXT,
  payload: {
    date,
  },
});

export const changeMoneyText = (money) => ({
  type: CALC_CHANGE_MONEY_TEXT,
  payload: {
    money,
  },
});

export const clearInputFields = () => ({
  type: CALC_CLEAR_INPUT_FIELDS,
});

export const addItem = (item) => ({
  type: CALC_ADD_ITEM,
  payload: {
    item,
  },
});

export const removeItem = (id) => ({
  type: CALC_REMOVE_ITEM,
  payload: {
    id,
  },
});

export const clearList = () => ({
  type: CALC_CLEAR_LIST,
});

