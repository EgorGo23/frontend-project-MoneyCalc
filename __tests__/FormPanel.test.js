import React from 'react';
import { shallow } from 'enzyme';
import { FormPanel } from '../src/components/MoneyCalc/Main/FormPanel';


describe('From panel test', () => {
  test('компонент отрисовался', () => {
    const props = {
      currentInputValues: {
        currentDate: '25.25.25',
        currentMoney: '6000',
      },
      list: [],
    };


    const form = shallow(<FormPanel {...props} />);

    expect(form.find('input[type="text"]')).toHaveLength(2);
  });
});
