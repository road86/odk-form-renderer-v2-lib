import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
import evaluater from '../../utils/compiler';
import {
  checkGroupedValuesForEmpty,
  emptyGroupedValues,
  getModifiedUserInputObject,
  getValueFromUserInputObj,
} from '../../utils/helpers';

/** interface for the store state */
export interface FormState {
  userInput: object;
  errors: string[];
  optionList: object;
}

// actions

/** FIELD_VALUE_ASSIGNED action type */
export const FIELD_VALUE_ASSIGNED = 'odk/reducer/form/FIELD_VALUE_ASSIGNED';
/** OPTION_LIST_ASSIGNED action type */
export const OPTION_LIST_ASSIGNED = 'odk/reducer/form/OPTION_LIST_ASSIGNED';
/** RESET_STORE action type */
export const RESET_STORE = 'odk/reducer/form/RESET_STORE';
/** ADD_ERROR_INPUT_ID action type */
export const ADD_ERROR_INPUT_ID = 'odk/reducer/form/ADD_ERROR_INPUT_ID';
/** REMOVE_ERROR_INPUT_ID action type */
export const REMOVE_ERROR_INPUT_ID = 'odk/reducer/form/REMOVE_ERROR_INPUT_ID';
/** EMPTY_GROUP_FIELDS */
export const EMPTY_GROUP_FIELDS = 'odk/reducer/form/EMPTY_GROUP_FIELDS';
/** REMOVE_GROUP_FIELDS_FROM_ERRORS */
export const REMOVE_GROUP_FIELDS_FROM_ERRORS =
  'odk/reducer/form/REMOVE_GROUP_FIELDS_FROM_ERRORS';
export const SET_USER_INPUT_OBJ = 'odk/reducer/form/SET_USER_INPUT_OBJ';

/** interface for ASSIGN_FIELD_VALUE action */
export interface AssignFieldValueAction extends AnyAction {
  fieldTreeName: string;
  fieldValue: any;
  type: typeof FIELD_VALUE_ASSIGNED;
}

/** interface for OPTION_LIST_ASSIGNED action */
export interface AssignOptionListAction extends AnyAction {
  fieldTreeName: string;
  fieldValue: any;
  type: typeof OPTION_LIST_ASSIGNED;
}

/** interface for RESET_STORE action */
export interface ResetStoreAction extends AnyAction {
  type: typeof RESET_STORE;
}

/** interface for ADD_ERROR_INPUT_ID action */
export interface AddErrorInputId extends AnyAction {
  fieldTreeName: string;
  type: typeof ADD_ERROR_INPUT_ID;
}

/** interface for REMOVE_ERROR_INPUT_ID action */
export interface RemoveErrorInputId extends AnyAction {
  fieldTreeName: string;
  type: typeof REMOVE_ERROR_INPUT_ID;
}

/** interface for EMPTY_GROUP_FIELDS action */
export interface EmptyGroupFields extends AnyAction {
  fieldTreeName: string;
  type: typeof EMPTY_GROUP_FIELDS;
}

/** interface for REMOVE_GROUP_FIELDS_FROM_ERRORS action */
export interface RemoveGroupFieldsFromErrors extends AnyAction {
  fieldTreeName: string;
  type: typeof REMOVE_GROUP_FIELDS_FROM_ERRORS;
}

/** interface for SET_USER_INPUT_OBJ action */
export interface SetUserInputObj extends AnyAction {
  userInputObj: any;
  type: typeof SET_USER_INPUT_OBJ;
}

/** Assigns the value to the proper field name
 * @param {string} fieldTreeName - the extended field name
 * @param {any} fieldValue - the value that will be assigned
 * @return {AssignFieldValueAction} - an action to assign value to a field in the redux store
 */
export const assignFieldValueAction = (
  fieldTreeName: string,
  fieldValue: any
): AssignFieldValueAction => ({
  fieldTreeName,
  fieldValue,
  type: FIELD_VALUE_ASSIGNED,
});

/** Assigns option list to the proper field name
 * @param {string} fieldTreeName - the extended field name
 * @param {any} fieldValue - the option list that will be assigned
 * @return {AssignOptionListAction} - an action to assign option List to a field in the redux store
 */
export const assignOptionListAction = (
  fieldTreeName: string,
  fieldValue: any
): AssignOptionListAction => ({
  fieldTreeName,
  fieldValue,
  type: OPTION_LIST_ASSIGNED,
});

/** Resets the redux store state to initial state
 * @return {ResetStoreAction} - an action to reset the redux store state
 */
export const resetStoreAction = (): ResetStoreAction => ({
  type: RESET_STORE,
});

/** add the field tree name as error id to store in redux store that violates constraints
 * @param fieldTreeName - the field tree name
 * @returns {AddErrorInputId} - an action to add input id for errors
 */
export const addErrorInputId = (fieldTreeName: string): AddErrorInputId => ({
  fieldTreeName,
  type: ADD_ERROR_INPUT_ID,
});

/** remove the field tree name as error id to store in redux store that violates constraints
 * @param fieldTreeName - the field tree name
 * @returns {RemoveErrorInputId} - an action to remove input id for errors
 */
export const removeErrorInputId = (
  fieldTreeName: string
): RemoveErrorInputId => ({
  fieldTreeName,
  type: REMOVE_ERROR_INPUT_ID,
});

/** empties the values of the fields of the group
 * @param fieldTreeName - the group field tree name
 * @returns {RemoveErrorInputId} - an action to empty the group field values
 */
export const emptyGroupFields = (fieldTreeName: string): EmptyGroupFields => ({
  fieldTreeName,
  type: EMPTY_GROUP_FIELDS,
});

/** removes the group field names from store errors obj
 * @param {string} fieldTreeName - the group field tree name
 * @returns {RemoveGroupFieldsFromErrors} - an action to remove group field names from errors
 */
export const removeGroupFieldsFromErrors = (
  fieldTreeName: string
): RemoveGroupFieldsFromErrors => ({
  fieldTreeName,
  type: REMOVE_GROUP_FIELDS_FROM_ERRORS,
});

/** sets the user input object to redux store
 * @param {any} userInputObj - the user input obj
 * @returns {SetUserInputObj} - an action to set user input to redux store
 */
export const setUserInputObj = (userInputObj: any): SetUserInputObj => ({
  type: SET_USER_INPUT_OBJ,
  userInputObj,
});

/** Create type for forms reducer actions */
export type FormActionTypes =
  | AssignFieldValueAction
  | AssignOptionListAction
  | ResetStoreAction
  | AddErrorInputId
  | RemoveErrorInputId
  | EmptyGroupFields
  | RemoveGroupFieldsFromErrors
  | SetUserInputObj
  | AnyAction;

/** Create an immutable form state */
export type ImmutableFormState = SeamlessImmutable.ImmutableObject<FormState>;

/** initial form state */
export const initialState: ImmutableFormState = SeamlessImmutable({
  errors: [],
  optionList: {},
  userInput: {},
});

/** the form reducer function */
export default function reducer(
  state: ImmutableFormState = initialState,
  action: FormActionTypes
): ImmutableFormState {
  switch (action.type) {
    case FIELD_VALUE_ASSIGNED:
      const modifiedUserInputObj = getModifiedUserInputObject(
        state.getIn(['userInput']).asMutable({ deep: true }),
        action.fieldTreeName,
        action.fieldValue
      );
      const stateM = state.asMutable({ deep: true });
      return SeamlessImmutable({ ...stateM, userInput: modifiedUserInputObj });
    case OPTION_LIST_ASSIGNED:
      const modifiedUserInputObjList = getModifiedUserInputObject(
        state.getIn(['optionList']).asMutable({ deep: true }),
        action.fieldTreeName,
        { ...action.fieldValue }
      );
      const newState = state.asMutable({ deep: true });
      return SeamlessImmutable({
        ...newState,
        optionList: modifiedUserInputObjList,
      });
    case RESET_STORE:
      return initialState;
    case ADD_ERROR_INPUT_ID:
      if (!state.errors.includes(action.fieldTreeName)) {
        return state.updateIn(['errors'], arr =>
          arr.concat([action.fieldTreeName])
        );
      }
      return state;
    case REMOVE_ERROR_INPUT_ID:
      if (state.errors.includes(action.fieldTreeName)) {
        return state.updateIn(['errors'], arr =>
          arr.filter(elm => elm !== action.fieldTreeName)
        );
      }
      return state;
    case EMPTY_GROUP_FIELDS:
      const mUserInputObj = emptyGroupedValues(
        state.getIn(['userInput']).asMutable({ deep: true }),
        action.fieldTreeName
      );
      const mState = state.asMutable({ deep: true });
      return SeamlessImmutable({ ...mState, userInput: mUserInputObj });
    case REMOVE_GROUP_FIELDS_FROM_ERRORS:
      return state.updateIn(['errors'], arr =>
        arr.filter(elm => !elm.startsWith(action.fieldTreeName))
      );
    case SET_USER_INPUT_OBJ:
      return SeamlessImmutable({
        ...state,
        userInput: (action as any).userInputObj,
      });
    default:
      return state;
  }
}

// selectors

/** get the value by their respective element tree name
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} value if the element name is found else null
 */
export function getFieldValue(
  state: Partial<Store>,
  fieldTreeName: string
): any {
  return getValueFromUserInputObj((state as any).userInput, fieldTreeName);
}

/** get option list by their respective element tree name
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} value if the element name is found else null
 */
export function getOptionList(
  state: Partial<Store>,
  fieldTreeName: string
): any {
  return getValueFromUserInputObj((state as any).optionList, fieldTreeName);
}

/** get the value of the evaluated expression
 * @param {Partial<Store>} state - the redux store
 * @param {string} expression - the expression that needs to be evaluated
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} - the evaluated value or null if syntax error
 */
export function getEvaluatedExpression(
  state: Partial<Store>,
  expression: string,
  fieldTreeName: string
): any {
  return evaluater(expression, (state as any).userInput, null, fieldTreeName);
}

/** get the value of the evaluated expression for Select One and Select All
 * @param {Partial<Store>} state - the redux store
 * @param {string} expression - the expression that needs to be evaluated
 * @param {any} options - the options that needs to be evaluated
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} - the evaluated value or null if syntax error
 */
export function getEvaluatedExpressionForSelect(
  state: Partial<Store>,
  expression: string,
  options: any,
  fieldTreeName: string
): any {
  return evaluater(
    expression,
    (state as any).userInput,
    options,
    fieldTreeName
  );
}

/** check if the field element is present in the store
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {boolean} true if present; otherwise, false
 */
export function isPresentInError(
  state: Partial<Store>,
  fieldTreeName: string
): any {
  return (state as any).errors.includes(fieldTreeName);
}

/** check if the field elements under group are empty or not
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the group field
 * @return {boolean} true if empty; otherwise, false
 */
export function isGroupFieldsEmpty(
  state: Partial<Store>,
  fieldTreeName: string
): any {
  return checkGroupedValuesForEmpty((state as any).userInput, fieldTreeName);
}

/** check if the field elements under group are present in errors or not
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the group field
 * @return {boolean} true if present; otherwise, false
 */
export function isErrorsIncludeGroupFields(
  state: Partial<Store>,
  fieldTreeName: string
): any {
  let isPresent = false;
  (state as any).errors.forEach((fTName: string) => {
    if (fTName.startsWith(fieldTreeName) && !isPresent) {
      isPresent = true;
    }
  });
  return isPresent;
}

/** check if the errors array in store empty or not
 * @param {Partial<Store>} state - the redux store
 * @return {boolean} true if empty; otherwise, false
 */
export function isErrorsArrayEmpty(state: Partial<Store>): any {
  return (state as any).errors && (state as any).errors.length ? false : true;
}

/** get the userInput object from store
 * @param {Partial<Store>} state - the redux store
 * @return {boolean} the current userInputObject
 */
export function getUserInputFromStore(state: Partial<Store>): any {
  return (state as any).getIn(['userInput']).asMutable({ deep: true });
}
