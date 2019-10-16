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
/** Create type for forms reducer actions */
export declare type FormActionTypes = AssignFieldValueAction | ResetStoreAction | AnyAction;
/** Create an immutable form state */
export declare type ImmutableFormState = SeamlessImmutable.ImmutableObject<FormState>;
/** initial form state */
export declare const initialState: ImmutableFormState;
/** the form reducer function */
export default function reducer(state: SeamlessImmutable.ImmutableObject<FormState> | undefined, action: FormActionTypes): ImmutableFormState;
/** get the value by their respective element tree name
 * @param {Partial<Store>} state - the redux store
 * @return {any | null} value if the element name is found else null
 */
export declare function getFieldValue(state: Partial<Store>, fieldTreeName: string): any;
