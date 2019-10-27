import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
import evaluater from '../../utils/compiler';

/** interface for the store state */
export interface FormState {
  userInput: object;
  errors: string[];
}

// actions

/** FIELD_VALUE_ASSIGNED action type */
export const FIELD_VALUE_ASSIGNED = 'odk/reducer/form/FIELD_VALUE_ASSIGNED';
/** RESET_STORE action type */
export const RESET_STORE = 'odk/reducer/form/RESET_STORE';
/** ADD_ERROR_INPUT_ID action type */
export const ADD_ERROR_INPUT_ID = 'odk/reducer/form/ADD_ERROR_INPUT_ID';
/** REMOVE_ERROR_INPUT_ID action type */
export const REMOVE_ERROR_INPUT_ID = 'odk/reducer/form/REMOVE_ERROR_INPUT_ID';

/** interface for ASSIGN_FIELD_VALUE action */
export interface AssignFieldValueAction extends AnyAction {
  fieldTreeName: string;
  fieldValue: any;
  type: typeof FIELD_VALUE_ASSIGNED;
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

/** Create type for forms reducer actions */
export type FormActionTypes =
  | AssignFieldValueAction
  | ResetStoreAction
  | AddErrorInputId
  | RemoveErrorInputId
  | AnyAction;

/** Create an immutable form state */
export type ImmutableFormState = SeamlessImmutable.ImmutableObject<FormState>;

/** initial form state */
export const initialState: ImmutableFormState = SeamlessImmutable({
  errors: [],
  userInput: {},
});

/** the form reducer function */
export default function reducer(
  state: ImmutableFormState = initialState,
  action: FormActionTypes
): ImmutableFormState {
  switch (action.type) {
    case FIELD_VALUE_ASSIGNED:
      const tmpUserInput = { [action.fieldTreeName]: action.fieldValue };
      return SeamlessImmutable({
        ...state,
        userInput: { ...state.userInput, ...tmpUserInput },
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
  return (state as any).userInput[fieldTreeName];
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

/** should the field element needs to be added to the store
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {boolean} true if needed; otherwise, false
 */
export function shouldAddToError(
  state: Partial<Store>,
  fieldTreeName: string
): any {
  return (state as any).userInput.errors.includes(fieldTreeName);
}
