import * as t from '../../src/actions/notebookActions';
import { currentInputDataReducer } from '../../src/reducers/notebook/notebookReducer';

describe('CurrentInputDataReducer test', () => {
  const initialState = {
    noteText: '',
  };

  test('Change date text', () => {
    const action = {
      type: t.NOTEBOOK_CHANGE_NOTE_TEXT,
      payload: {
        text: 'test text',
      },
    };

    expect(currentInputDataReducer(initialState, action)).toEqual({
      ...initialState,
      noteText: action.payload.text,
    });
  });

  test('Clear input field', () => {
    const action = {
      type: t.NOTEBOOK_CLEAR_INPUT_FIELDS,
    };

    const localInitialState = {
      noteText: 'test text',
    };

    expect(currentInputDataReducer(localInitialState, action)).toEqual({
      noteText: '',
    });
  });
});
