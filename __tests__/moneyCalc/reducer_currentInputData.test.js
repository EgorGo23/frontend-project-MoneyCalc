import * as t from '../../src/actions/calcActions';
import { currentInputDataReducer } from '../../src/reducers/calc/calcReducer';


describe('CurrentInputDataReducer test', () => {
  const initialState = {
    dateText: '',
    moneyText: '',
  };

  test('Change date text', () => {
    const action = {
      type: t.CALC_CHANGE_DATE_TEXT,
      payload: {
        text: '25.05.20',
      },
    };

    expect(currentInputDataReducer(initialState, action)).toEqual({
      ...initialState,
      dateText: action.payload.text,
    });
  });


  test('Change money text', () => {
    const action = {
      type: t.CALC_CHANGE_MONEY_TEXT,
      payload: {
        text: '6000',
      },
    };

    expect(currentInputDataReducer(initialState, action)).toEqual({
      ...initialState,
      moneyText: action.payload.text,
    });
  });


  test('Clear input fields', () => {
    const action = {
      type: t.CALC_CLEAR_INPUT_FIELDS,
    };

    const localInitialState = {
      dateText: '25.05.20',
      moneyText: '6000',
    };

    expect(currentInputDataReducer(localInitialState, action)).toEqual({
      dateText: '',
      moneyText: '',
    });
  });
});
