import store from '../../store';
import {
  assignFieldValueAction,
  getFieldValue,
} from '../../store/ducks/formState';

describe('store', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  /** tests to check redux store */
  it('should be a redux store', () => {
    expect(typeof store.dispatch).toEqual('function');
    expect(typeof store.getState).toEqual('function');
  });

  /** tests to check actions and selectors of default reducer */
  it('should work with default reducer', () => {
    /** example action params */
    const example = {
      fieldTreeName: 'exampleTextField',
      fieldValue: 'testing',
    };
    // initially the field value will be empty
    expect(
      getFieldValue(store.getState(), example.fieldTreeName)
    ).toBeUndefined();
    // call action to assign field value
    store.dispatch(
      assignFieldValueAction(example.fieldTreeName, example.fieldValue)
    );
    // the field value should be equal to action field value
    expect(getFieldValue(store.getState(), example.fieldTreeName)).toEqual(
      example.fieldValue
    );
  });
});
