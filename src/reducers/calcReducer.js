import { combineReducers } from 'redux';
import {
  CALC_CHANGE_DATE_TEXT,
  CALC_CHANGE_MONEY_TEXT,
  CALC_CLEAR_INPUT_FIELDS,
  CALC_ADD_ITEM,
  CALC_DELETE_ITEM,
} from '../actions/calcActions';

const defaultStateCurrentInput = {
  currentDate: '',
  currentMoney: '',
};

const defaultStateList = [];

const currentInputDataReducer = (state = defaultStateCurrentInput, action) => {
  switch (action.type) {
    case CALC_CHANGE_DATE_TEXT: {
      const { date } = action.payload;
      return {
        ...state,
        currentDate: date,
      };
    }

    case CALC_CHANGE_MONEY_TEXT: {
      const { money } = action.payload;
      return {
        ...state,
        currentMoney: money,
      };
    }

    case CALC_CLEAR_INPUT_FIELDS: {
      return {
        ...state,
        currentDate: '',
        currentMoney: '',
      };
    }

    default: {
      return state;
    }
  }
};

const expensesIncomeListReducer = (state = defaultStateList, action) => {
  switch (action.type) {
    case CALC_ADD_ITEM: {
      const { item } = action.payload;
      return [
        ...state,
        item,
      ];
    }

    case CALC_DELETE_ITEM: {
      const { id } = action.payload;
      console.log(id);
      return state.filter((element) => element.id === id);
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  currentInputData_Calc: currentInputDataReducer,
  expensesIncomeList_Calc: expensesIncomeListReducer,
});
