import * as t from '../../src/actions/calcActions';
import { currentInputDataReducer } from '../../src/reducers/calcReducer';


describe('CurrentInputDataReducer test', () => {
  const initialState = {
    currentDate: '',
    currentMoney: '',
  };

  test('Change date text', () => {
    const action = {
      type: t.CALC_CHANGE_DATE_TEXT,
      payload: {
        date: '25.05.20',
      },
    };

    expect(currentInputDataReducer(initialState, action)).toEqual({
      ...initialState,
      currentDate: action.payload.date,
    });
  });


  test('Change money text', () => {
    const action = {
      type: t.CALC_CHANGE_MONEY_TEXT,
      payload: {
        money: '6000',
      },
    };

    expect(currentInputDataReducer(initialState, action)).toEqual({
      ...initialState,
      currentMoney: action.payload.money,
    });
  });


  test('Clear input fields', () => {
    const action = {
      type: t.CALC_CLEAR_INPUT_FIELDS,
    };

    const localInitialState = {
      currentDate: '25.05.20',
      currentMoney: '6000',
    };

    expect(currentInputDataReducer(localInitialState, action)).toEqual({
      currentDate: '',
      currentMoney: '',
    });
  });
});
