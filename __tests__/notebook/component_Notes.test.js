import React from 'react';
import { shallow } from 'enzyme';
import { Notes } from '../../src/components/Notebook/Main/Notes';

describe('Notes test', () => {
  const props = {
    currentInputData: {},
    list: [
      { id: '930', note: 'Test text', completed: false },
      { id: '883', note: 'Test text', completed: true },
      { id: '814', note: 'Test text', completed: true },
    ],
  };

  const listNotes = shallow(<Notes { ...props } />);

  test('element rendering', () => {
    expect(listNotes.find('.list-group-item')).toHaveLength(3);
  });
});
