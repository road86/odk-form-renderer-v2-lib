import { FieldElement } from '../components/typeEvalutors/Base';
/**
 * get the text from multilang obj based on language identifier,
 * @param {FieldElement} property - field multilang property or string
 * @return {string} - text value of the property based on language identifier, empty if not present
 */
export default function getTextFromProperty(property: string | {
    [key: string]: string;
}, languageIdentifier: string): string;
/**
 * get the label text of the fieldElement
 * @param {FieldElement} fieldElement - the fieldElement Object
 * @return {string} - field label text
 */
export declare function getFieldLabelText(fieldElement: FieldElement, languageIdentifier: string): string;
/**
 * get the hint text of the fieldElement
 * @param {FieldElement} fieldElement - the fieldElement Object
 * @return {string} - field hint text
 */
export declare function getFieldHintText(fieldElement: FieldElement, languageIdentifier: string): string;
/**
 * get the label text of the fieldElement constraint msg
 * @param {FieldElement} fieldElement - the fieldElement Object
 * @return {string} - constraint label text
 */
export declare function getConstraintLabelText(fieldElement: FieldElement, languageIdentifier: string): string;
/**
 * get the boolean result of fieldElement string
 * @param fieldElement
 * @return {boolean} - boolean value by calculating fieldElement required properties
 */
export declare function isInputRequired(fieldElement: FieldElement): boolean;
/** interface for EvaluateExpression
 * @param {string} expression - the expression that needs to be evaluated
 * @param {fieldTreeName} - the field Tree name
 * @returns {any} - evaluated value
 */
export declare type EvaluateExpression = (expression: string, fieldTreeName: string) => any;
/** evaluates whether a component be relevant or not
 * @param {FieldElement} fieldElement - the expression that needs to be evaluated
 * @param {string} fieldParentTreeName- the field Parent Tree name
 * @param {EvaluateExpression} evaluateExpression- an handler to evaluate the relevant expression
 * @returns {boolean} - true if relevant; otherwise, false;
 */
export declare function shouldComponentBeRelevant(fieldElement: FieldElement, fieldParentTreeName: string, evaluateExpression: EvaluateExpression): boolean;
/** evaluates whether a component be readonly or not
 * @param {FieldElement} fieldElement - the expression that needs to be evaluated
 * @param {string} fieldParentTreeName- the field Parent Tree name
 * @param {EvaluateExpression} evaluateExpression- an handler to evaluate the readonly expression
 * @returns {boolean} - true if readonly; otherwise, false;
 */
export declare function shouldComponentBeReadOnly(fieldElement: FieldElement, fieldParentTreeName: string, evaluateExpression: EvaluateExpression): boolean;
/** evaluates whether the input violates constraint or not
 * @param {FieldElement} fieldElement - the constraint expression
 * @param {string} fieldParentTreeName- the field Parent Tree name
 * @param {EvaluateExpression} evaluateExpression- an handler to evaluate the expression
 * @returns {boolean} - true if violates; otherwise, false;
 */
export declare function shouldInputViolatesConstraint(fieldElement: FieldElement, fieldParentTreeName: string, evaluateExpression: EvaluateExpression): boolean;
/** returns the new user input object after assigning value of passed fieldTreeName
 * @param {any} userInputObj - the current user input object
 * @param {string} fieldTreeName - the field Tree name
 * @param {any} fieldValue - the value that needs to be assigned
 * @returns {any} - the new user input object after assignment
 */
export declare function getModifiedUserInputObject(userInputObj: any, fieldTreeName: string, fieldValue: any): any;
/** returns the value from the user input object
 * @param {any} userInputObj - the user input object
 * @param {string} fieldTreeName - the field Tree name
 * @returns {any} - the value, present in user input object, of the fieldTreeName
 */
export declare function getValueFromUserInputObj(userInputObj: any, fieldTreeName: string): any;
/** evaluates whether the component is minimal or not
 * @param {FieldElement} fieldElement - the constraint expression
 * @returns {boolean} - true if minimal; otherwise, false;
 */
export declare function shouldComponentBeMinimal(fieldElement: FieldElement): boolean;
/** returns the new user input object after emptying the desired grouped values
 * @param {any} userInputObj - the current user input object
 * @param {string} groupTreeName - the group Tree name
 * @returns {any} - the new user input object after emptying the grouped values
 */
export declare function emptyGroupedValues(userInputObj: any, groupTreeName: string): any;
/** returns whether the grouped values are empty or not
 * @param {any} userInputObj - the current user input object
 * @param {string} groupTreeName - the group Tree name
 * @returns {any} - true if empty; otherwise, false
 */
export declare function checkGroupedValuesForEmpty(userInputObj: any, groupTreeName: string): any;
