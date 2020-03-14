import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesIncomeList } from '../../src/components/MoneyCalc/Main/ExpensesIncomeList';

describe('ExpensesIncomeList test', () => {
  const props = {
    currentInputData: {
      currentDate: '',
      currentMoney: '',
    },
    list: [
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
    ],
  };

  const list = shallow(<ExpensesIncomeList { ...props } />);

  test('element rendering', () => {
    expect(list.find('.list-group-item')).toHaveLength(3);
  });
});
