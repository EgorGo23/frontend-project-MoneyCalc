import * as t from '../../src/actions/notebookActions';
import { noteListReducer } from '../../src/reducers/notebook/notebookReducer';

describe('ExpensesIncomeListReducer test ', () => {
  const initialState = [
    { id: '930', note: 'Test text', completed: false },
    { id: '883', note: 'Test text', completed: true },
    { id: '814', note: 'Test text', completed: true },
  ];

  test('ADD_ITEM', () => {
    const action = {
      type: t.NOTEBOOK_ADD_ITEM,
      payload: {
        item: {
          id: '389',
          note: 'Test text',
          completed: false,
        },
      },
    };

    const localInitialState = [];

    expect(noteListReducer(localInitialState, action)).toEqual([
      action.payload.item,
      ...localInitialState,
    ]);
  });

  test('REMOVE_ITEM', () => {
    const action = {
      type: t.NOTEBOOK_REMOVE_ITEM,
      payload: {
        id: '930',
      },
    };

    expect(noteListReducer(initialState, action)).toEqual([
      { id: '883', note: 'Test text', completed: true },
      { id: '814', note: 'Test text', completed: true },
    ]);
  });

  test('NOTEBOOK_TOGGLE_CHECKBOX', () => {
    const action = {
      type: t.NOTEBOOK_TOGGLE_CHECKBOX,
      payload: {
        id: '814',
      },
    };

    expect(noteListReducer(initialState, action)).toEqual([
      { id: '930', note: 'Test text', completed: false },
      { id: '883', note: 'Test text', completed: true },
      { id: '814', note: 'Test text', completed: false },
    ]);
  });

  test('CLEAR_LIST', () => {
    const action = {
      type: t.NOTEBOOK_CLEAR_LIST,
    };

    expect(noteListReducer(initialState, action)).toEqual([]);
  });
});
