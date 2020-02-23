export const CALC_CHANGE_DATE_TEXT = 'CALC_CHANGE_DATE_TEXT';
export const CALC_CHANGE_MONEY_TEXT = 'CALC_CHANGE_MONEY_TEXT';
export const CALC_CLEAR_INPUT_FIELDS = 'CALC_CLEAR_INPUT_FIELDS';
export const CALC_ADD_ITEM = 'CALC_ADD_ITEM';
export const CALC_DELETE_ITEM = 'CALC_DELETE_ITEM';


export const setDateText = (date) => ({
  type: CALC_CHANGE_DATE_TEXT,
  payload: {
    date,
  },
});

export const setMoneyText = (money) => ({
  type: CALC_CHANGE_MONEY_TEXT,
  payload: {
    money,
  },
});

export const clearInputText = () => ({
  type: CALC_CLEAR_INPUT_FIELDS,
});

export const addItem = (item) => ({
  type: CALC_ADD_ITEM,
  payload: {
    item,
  },
});

export const deleteItem = (id) => ({
  type: CALC_DELETE_ITEM,
  payload: {
    id,
  },
})