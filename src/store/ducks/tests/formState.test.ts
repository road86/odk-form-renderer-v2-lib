import store from '../../../store';
import {
  assignFieldValueAction,
  getFieldValue,
  initialState,
  resetStoreAction,
} from '../../../store/ducks/formState';
import {
  fieldExample1,
  fieldExample2,
  modifiedFieldExample1,
} from './fixtures';

describe('store', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    store.dispatch(resetStoreAction());
  });

  /** checks selectors work in empty state */
  it('should work with initial empty state', () => {
    expect(
      getFieldValue(store.getState(), fieldExample1.fieldTreeName)
    ).toBeNull();
    expect(
      getFieldValue(store.getState(), fieldExample2.fieldTreeName)
    ).toBeNull();
  });

  /** checks whether actions assign and selectors get correct value */
  it('should assign and fetch field value correctly', () => {
    // initially the field value will be empty
    expect(
      getFieldValue(store.getState(), fieldExample1.fieldTreeName)
    ).toBeNull();
    // call action to assign field value to a new field
    store.dispatch(
      assignFieldValueAction(
        fieldExample1.fieldTreeName,
        fieldExample1.fieldValue
      )
    );
    // the field value should be equal to action field value
    expect(
      getFieldValue(store.getState(), fieldExample1.fieldTreeName)
    ).toEqual(fieldExample1.fieldValue);
    // call action to modify existing field value
    store.dispatch(
      assignFieldValueAction(
        modifiedFieldExample1.fieldTreeName,
        modifiedFieldExample1.fieldValue
      )
    );
    // the field value should be equal to the new action field value
    expect(
      getFieldValue(store.getState(), modifiedFieldExample1.fieldTreeName)
    ).toEqual(modifiedFieldExample1.fieldValue);
  });

  /** checks assignment of a field value does not overide other field values */
  it('should not overide other field values', () => {
    // call action to assign field value to a field
    store.dispatch(
      assignFieldValueAction(
        fieldExample1.fieldTreeName,
        fieldExample1.fieldValue
      )
    );
    // call action to assign field value to another field
    store.dispatch(
      assignFieldValueAction(
        fieldExample2.fieldTreeName,
        fieldExample2.fieldValue
      )
    );
    expect(
      getFieldValue(store.getState(), fieldExample1.fieldTreeName)
    ).toEqual(fieldExample1.fieldValue);
    expect(
      getFieldValue(store.getState(), fieldExample2.fieldTreeName)
    ).toEqual(fieldExample2.fieldValue);
  });

  /** checks reset action resets store correctly */
  it('should reset store correctly', () => {
    expect(store.getState()).toEqual(initialState);
    // call action to assign field value to a field
    store.dispatch(
      assignFieldValueAction(
        fieldExample1.fieldTreeName,
        fieldExample1.fieldValue
      )
    );
    expect(store.getState()).not.toEqual(initialState);
    store.dispatch(resetStoreAction());
    expect(store.getState()).toEqual(initialState);
  });
});
