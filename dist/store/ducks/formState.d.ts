import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
/** interface for the store state */
export interface FormState {
    userInput: object;
    errors: string[];
}
/** FIELD_VALUE_ASSIGNED action type */
export declare const FIELD_VALUE_ASSIGNED = "odk/reducer/form/FIELD_VALUE_ASSIGNED";
/** RESET_STORE action type */
export declare const RESET_STORE = "odk/reducer/form/RESET_STORE";
/** ADD_ERROR_INPUT_ID action type */
export declare const ADD_ERROR_INPUT_ID = "odk/reducer/form/ADD_ERROR_INPUT_ID";
/** REMOVE_ERROR_INPUT_ID action type */
export declare const REMOVE_ERROR_INPUT_ID = "odk/reducer/form/REMOVE_ERROR_INPUT_ID";
/** EMPTY_GROUP_FIELDS */
export declare const EMPTY_GROUP_FIELDS = "odk/reducer/form/EMPTY_GROUP_FIELDS";
/** REMOVE_GROUP_FIELDS_FROM_ERRORS */
export declare const REMOVE_GROUP_FIELDS_FROM_ERRORS = "odk/reducer/form/REMOVE_GROUP_FIELDS_FROM_ERRORS";
export declare const SET_USER_INPUT_OBJ = "odk/reducer/form/SET_USER_INPUT_OBJ";
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
export declare const assignFieldValueAction: (fieldTreeName: string, fieldValue: any) => AssignFieldValueAction;
/** Resets the redux store state to initial state
 * @return {ResetStoreAction} - an action to reset the redux store state
 */
export declare const resetStoreAction: () => ResetStoreAction;
/** add the field tree name as error id to store in redux store that violates constraints
 * @param fieldTreeName - the field tree name
 * @returns {AddErrorInputId} - an action to add input id for errors
 */
export declare const addErrorInputId: (fieldTreeName: string) => AddErrorInputId;
/** remove the field tree name as error id to store in redux store that violates constraints
 * @param fieldTreeName - the field tree name
 * @returns {RemoveErrorInputId} - an action to remove input id for errors
 */
export declare const removeErrorInputId: (fieldTreeName: string) => RemoveErrorInputId;
/** empties the values of the fields of the group
 * @param fieldTreeName - the group field tree name
 * @returns {RemoveErrorInputId} - an action to empty the group field values
 */
export declare const emptyGroupFields: (fieldTreeName: string) => EmptyGroupFields;
/** removes the group field names from store errors obj
 * @param {string} fieldTreeName - the group field tree name
 * @returns {RemoveGroupFieldsFromErrors} - an action to remove group field names from errors
 */
export declare const removeGroupFieldsFromErrors: (fieldTreeName: string) => RemoveGroupFieldsFromErrors;
/** sets the user input object to redux store
 * @param {any} userInputObj - the user input obj
 * @returns {SetUserInputObj} - an action to set user input to redux store
 */
export declare const setUserInputObj: (userInputObj: any) => SetUserInputObj;
/** Create type for forms reducer actions */
export declare type FormActionTypes = AssignFieldValueAction | ResetStoreAction | AddErrorInputId | RemoveErrorInputId | EmptyGroupFields | RemoveGroupFieldsFromErrors | SetUserInputObj | AnyAction;
/** Create an immutable form state */
export declare type ImmutableFormState = SeamlessImmutable.ImmutableObject<FormState>;
/** initial form state */
export declare const initialState: ImmutableFormState;
/** the form reducer function */
export default function reducer(state: SeamlessImmutable.ImmutableObject<FormState> | undefined, action: FormActionTypes): ImmutableFormState;
/** get the value by their respective element tree name
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} value if the element name is found else null
 */
export declare function getFieldValue(state: Partial<Store>, fieldTreeName: string): any;
/** get the value of the evaluated expression
 * @param {Partial<Store>} state - the redux store
 * @param {string} expression - the expression that needs to be evaluated
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} - the evaluated value or null if syntax error
 */
export declare function getEvaluatedExpression(state: Partial<Store>, expression: string, fieldTreeName: string): any;
/** get the value of the evaluated expression for Select One and Select All
 * @param {Partial<Store>} state - the redux store
 * @param {string} expression - the expression that needs to be evaluated
 * @param {any} options - the options that needs to be evaluated
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {any | null} - the evaluated value or null if syntax error
 */
export declare function getEvaluatedExpressionForSelect(state: Partial<Store>, expression: string, options: any, fieldTreeName: string): any;
/** check if the field element is present in the store
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the field
 * @return {boolean} true if present; otherwise, false
 */
export declare function isPresentInError(state: Partial<Store>, fieldTreeName: string): any;
/** check if the field elements under group are empty or not
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the group field
 * @return {boolean} true if empty; otherwise, false
 */
export declare function isGroupFieldsEmpty(state: Partial<Store>, fieldTreeName: string): any;
/** check if the field elements under group are present in errors or not
 * @param {Partial<Store>} state - the redux store
 * @param {string} fieldTreeName - the hierchical tree name of the group field
 * @return {boolean} true if present; otherwise, false
 */
export declare function isErrorsIncludeGroupFields(state: Partial<Store>, fieldTreeName: string): any;
/** check if the errors array in store empty or not
 * @param {Partial<Store>} state - the redux store
 * @return {boolean} true if empty; otherwise, false
 */
export declare function isErrorsArrayEmpty(state: Partial<Store>): any;
/** get the userInput object from store
 * @param {Partial<Store>} state - the redux store
 * @return {boolean} the current userInputObject
 */
export declare function getUserInputFromStore(state: Partial<Store>): any;
