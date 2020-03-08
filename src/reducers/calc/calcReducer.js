import { combineReducers } from 'redux';
import {
  CALC_CHANGE_TEXT,
  CALC_CLEAR_INPUT_FIELDS,
  CALC_ADD_ITEM,
  CALC_REMOVE_ITEM,
  CALC_CLEAR_LIST,
} from '../../actions/calcActions';


const defaultStateCurrentInput = {
  dateText: '',
  moneyText: '',
};

const defaultStateList = [];

export const currentInputDataReducer = (state = defaultStateCurrentInput, { type, payload }) => {
  switch (type) {
    case CALC_CHANGE_TEXT: {
      if (payload.text === null) {
        return {
          ...state,
          moneyText: '',
        };
      }
      if (typeof payload.text === 'string') {
        return {
          ...state,
          dateText: payload.text,
        };
      }
      return {
        ...state,
        moneyText: payload.text,
      };
    }

    case CALC_CLEAR_INPUT_FIELDS: {
      return defaultStateCurrentInput;
    }

    default: {
      return state;
    }
  }
};

export const expensesIncomeListReducer = (state = defaultStateList, { type, payload }) => {
  switch (type) {
    case CALC_ADD_ITEM: {
      return [
        payload.item,
        ...state,
      ];
    }

    case CALC_REMOVE_ITEM: {
      return state.filter((element) => element.id !== payload.id);
    }

    case CALC_CLEAR_LIST: {
      return defaultStateList;
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  currentInputData: currentInputDataReducer,
  expensesIncomeList: expensesIncomeListReducer,
});
