import * as t from '../../src/actions/calcActions';
import { expensesIncomeListReducer } from '../../src/reducers/calcReducer';

describe('ExpensesIncomeListReducer test ', () => {
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

    const localInitialState = [];

    expect(expensesIncomeListReducer(localInitialState, action)).toEqual([
      action.payload.item,
      ...localInitialState,
    ]);
  });


  test('REMOVE_ITEM', () => {
    const action = {
      type: t.CALC_REMOVE_ITEM,
      payload: {
        id: 389,
      },
    };

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


  test('CLEAR_LIST', () => {
    const action = {
      type: t.CALC_CLEAR_LIST,
    };

    expect(expensesIncomeListReducer(initialState, action)).toEqual([]);
  });
});
