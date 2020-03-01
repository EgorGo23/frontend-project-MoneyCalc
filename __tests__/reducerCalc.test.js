import * as t from '../src/actions/calcActions';
import { expensesIncomeListReducer } from '../src/reducers/calcReducer';

describe('ExpensesIncomeListReducer test ', () => {
  test('ADD_ITEM', () => {
    const action = {
      type: t.CALC_ADD_ITEM,
      payload: {
        item: {
          id: 389,
          category: {
            categoryName: 'Food',
            categorySign: '-',
          },
          date: '12.12.12',
          money: '7500',
        },
      },
    };

    const initialState = [];

    expect(expensesIncomeListReducer(initialState, action)).toEqual([
      action.payload.item,
      ...initialState,
    ]);
  });

  test('REMOVE_ITEM', () => {
    const action = {
      type: t.CALC_REMOVE_ITEM,
      payload: {
        id: 389,
      },
    };

    const initialState = [
      {
        id: 389,
        category: {
          categoryName: 'Food',
          categorySign: '-',
        },
        date: '12.12.12',
        money: '7500',
      },
      {
        id: 2,
        category: {
          categoryName: 'Food',
          categorySign: '-',
        },
        date: '12.12.12',
        money: '7500',
      },
      {
        id: 25,
        category: {
          categoryName: 'Food',
          categorySign: '-',
        },
        date: '12.12.12',
        money: '7500',
      },
    ];


    expect(expensesIncomeListReducer(initialState, action)).toEqual([
      {
        id: 2,
        category: {
          categoryName: 'Food',
          categorySign: '-',
        },
        date: '12.12.12',
        money: '7500',
      },
      {
        id: 25,
        category: {
          categoryName: 'Food',
          categorySign: '-',
        },
        date: '12.12.12',
        money: '7500',
      },
    ]);
  });
});
