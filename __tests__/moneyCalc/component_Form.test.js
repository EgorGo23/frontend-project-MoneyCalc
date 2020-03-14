import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../../src/components/MoneyCalc/Main/Form';


describe('FromPanel test', () => {
  test('Button is active when there is current input', () => {
    const props = {
      currentInputData: {
        dateText: '25.05.20',
        moneyText: '6000',
      },
      list: [],
    };

    const form = shallow(<Form {...props} />);

    expect(form.find('.btn-add_disabled')).toHaveLength(0);
  });


  test('Button is disabled when the current input is empty', () => {
    const props = {
      currentInputData: {
        dateText: '',
        moneyText: '',
      },
      list: [],
    };

    const form = shallow(<Form {...props} />);

    expect(form.find('.btn-add_disabled')).toHaveLength(1);
  });


  test('Button is disabled when at least one field is empty', () => {
    {
      const props = {
        currentInputData: {
          dateText: '25.05.20',
          moneyText: '',
        },
        list: [],
      };

      const form = shallow(<Form {...props} />);

      expect(form.find('.btn-add_disabled')).toHaveLength(1);
    }
    {
      const props = {
        currentInputData: {
          dateText: '',
          moneyText: '6000',
        },
        list: [],
      };

      const form = shallow(<Form {...props} />);

      expect(form.find('.btn-add_disabled')).toHaveLength(1);
    }
  });
});
