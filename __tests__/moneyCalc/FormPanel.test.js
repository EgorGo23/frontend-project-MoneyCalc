import React from 'react';
import { shallow } from 'enzyme';
import { FormPanel } from '../../src/components/MoneyCalc/Main/FormPanel';


describe('From panel test', () => {
  const form = shallow(<FormPanel {...props} />);

  test('Button is active when there is current input', () => {
    const props = {
      currentInputValues: {
        currentDate: '25.05.20',
        currentMoney: '6000',
      },
      list: [],
    };

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

    expect(form.find('button[disabled]')).toHaveLength(1);
  });


  test('Button is disabled when at least one field is empty', () => {
    const props = {
      currentInputValues: {
        currentDate: '25.05.20',
        currentMoney: '',
      },
      list: [],
    };


    expect(form.find('button[disabled]')).toHaveLength(1);
  });

  // test(' test snapshot', () => {
  //   expect(form).toMatchSnapshot();
  // });

  // test('test snapsho2', () => {
  //   const props = {
  //     currentInputValues: {
  //       currentDate: '25.05.20',
  //       currentMoney: '6000',
  //     },
  //     list: [],
  //   };

  //   form.find('button').simulate('click');
  //   expect()
  // });
});
