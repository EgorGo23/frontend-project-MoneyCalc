import React from 'react';
import { shallow } from 'enzyme';
import { FormPanel } from '../../src/components/MoneyCalc/Main/FormPanel';


describe('FromPanel test', () => {
  test('Button is active when there is current input', () => {
    const props = {
      currentInputValues: {
        currentDate: '25.05.20',
        currentMoney: '6000',
      },
      list: [],
    };

    const form = shallow(<FormPanel {...props} />);

    expect(form.find('button[disabled]')).toHaveLength(0);
  });


  test('Button is disabled when the current input is empty', () => {
    const props = {
      currentInputValues: {
        currentDate: '',
        currentMoney: '',
      },
      list: [],
    };

    const form = shallow(<FormPanel {...props} />);

    expect(form.find('button[disabled]')).toHaveLength(1);
  });


  test('Button is disabled when at least one field is empty', () => {
    {
      const props = {
        currentInputValues: {
          currentDate: '25.05.20',
          currentMoney: '',
        },
        list: [],
      };

      const form = shallow(<FormPanel {...props} />);

      expect(form.find('button[disabled]')).toHaveLength(1);
    }
    {
      const props = {
        currentInputValues: {
          currentDate: '',
          currentMoney: '6000',
        },
        list: [],
      };

      const form = shallow(<FormPanel {...props} />);

      expect(form.find('button[disabled]')).toHaveLength(1);
    }
  });
});
