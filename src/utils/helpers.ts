import { FieldElement } from '../components/typeEvalutors/Base';

/**
 * get the text from multilang obj based on language identifier,
 * @param {FieldElement} property - field multilang property or string
 * @return {string} - text value of the property based on language identifier, empty if not present
 */
export default function getTextFromProperty(
  property: string | { [key: string]: string },
  languageIdentifier: string
): string {
  if (typeof property === 'string') {
    return property || '';
  }
  return property[languageIdentifier] || '';
}

/**
 * get the label text of the fieldElement
 * @param {FieldElement} fieldElement - the fieldElement Object
 * @return {string} - field label text
 */
export function getFieldLabelText(
  fieldElement: FieldElement,
  languageIdentifier: string
) {
  if (fieldElement.label) {
    return getTextFromProperty(fieldElement.label, languageIdentifier);
  }
  return '';
}

/**
 * get the hint text of the fieldElement
 * @param {FieldElement} fieldElement - the fieldElement Object
 * @return {string} - field hint text
 */
export function getFieldHintText(
  fieldElement: FieldElement,
  languageIdentifier: string
) {
  if (fieldElement.hint) {
    return getTextFromProperty(fieldElement.hint, languageIdentifier);
  }
  return '';
}

/**
 * get the label text of the fieldElement constraint msg
 * @param {FieldElement} fieldElement - the fieldElement Object
 * @return {string} - constraint label text
 */
export function getConstraintLabelText(
  fieldElement: FieldElement,
  languageIdentifier: string
) {
  if (fieldElement.bind && fieldElement.bind['jr:constraintMsg']) {
    return getTextFromProperty(
      fieldElement.bind['jr:constraintMsg'],
      languageIdentifier
    );
  }
  return '';
}

/**
 * get the boolean result depending on the expression
 * @param {string} - required string
 * @returns {boolean} - true if required, otherwise false
 */
function requiredEvaluator(expression: string): boolean {
  if (
    expression.toLowerCase() === 'yes' ||
    expression === '1' ||
    expression.toLowerCase() === 'true'
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * get the boolean result of fieldElement string
 * @param fieldElement
 * @return {boolean} - boolean value by calculating fieldElement required properties
 */
export function isInputRequired(fieldElement: FieldElement): boolean {
  let isRequired = false;
  if (fieldElement.bind) {
    if (fieldElement.bind.required) {
      if (
        typeof fieldElement.bind.required === 'string' &&
        requiredEvaluator(fieldElement.bind.required)
      ) {
        isRequired = true;
      }
    }
  }
  return isRequired;
}

/** interface for EvaluateExpression
 * @param {string} expression - the expression that needs to be evaluated
 * @param {fieldTreeName} - the field Tree name
 * @returns {any} - evaluated value
 */
export type EvaluateExpression = (
  expression: string,
  fieldTreeName: string
) => any;

/** evaluates whether a component be relevant or not
 * @param {FieldElement} fieldElement - the expression that needs to be evaluated
 * @param {string} fieldParentTreeName- the field Parent Tree name
 * @param {EvaluateExpression} evaluateExpression- an handler to evaluate the relevant expression
 * @returns {boolean} - true if relevant; otherwise, false;
 */
export function shouldComponentBeRelevant(
  fieldElement: FieldElement,
  fieldParentTreeName: string,
  evaluateExpression: EvaluateExpression
): boolean {
  if (fieldElement && fieldElement.bind && fieldElement.bind.relevant) {
    const isRelevant = evaluateExpression(
      fieldElement.bind.relevant,
      fieldParentTreeName + fieldElement.name
    );
    if (isRelevant) {
      return true;
    }
    return false;
  }
  return true;
}

/** evaluates whether a component be readonly or not
 * @param {FieldElement} fieldElement - the expression that needs to be evaluated
 * @param {string} fieldParentTreeName- the field Parent Tree name
 * @param {EvaluateExpression} evaluateExpression- an handler to evaluate the readonly expression
 * @returns {boolean} - true if readonly; otherwise, false;
 */
export function shouldComponentBeReadOnly(
  fieldElement: FieldElement,
  fieldParentTreeName: string,
  evaluateExpression: EvaluateExpression
): boolean {
  if (fieldElement && fieldElement.bind && fieldElement.bind.readonly) {
    const isReadOnly = evaluateExpression(
      fieldElement.bind.readonly,
      fieldParentTreeName + fieldElement.name
    );
    if (isReadOnly) {
      return true;
    }
    return false;
  }
  return false;
}

/** evaluates whether the input violates constraint or not
 * @param {FieldElement} fieldElement - the constraint expression
 * @param {string} fieldParentTreeName- the field Parent Tree name
 * @param {EvaluateExpression} evaluateExpression- an handler to evaluate the expression
 * @returns {boolean} - true if violates; otherwise, false;
 */
export function shouldInputViolatesConstraint(
  fieldElement: FieldElement,
  fieldParentTreeName: string,
  evaluateExpression: EvaluateExpression
): boolean {
  if (fieldElement && fieldElement.bind && fieldElement.bind.constraint) {
    const isConstraintViolated = !evaluateExpression(
      fieldElement.bind.constraint,
      fieldParentTreeName + fieldElement.name
    );
    if (isConstraintViolated) {
      return true;
    }
    return false;
  }
  return false;
}

/** returns the new user input object after assigning value of passed fieldTreeName
 * @param {any} userInputObj - the current user input object
 * @param {string} fieldTreeName - the field Tree name
 * @param {any} fieldValue - the value that needs to be assigned
 * @returns {any} - the new user input object after assignment
 */
export function getModifiedUserInputObject(
  userInputObj: any,
  fieldTreeName: string,
  fieldValue: any
): any {
  const treeNodes = fieldTreeName.split('/');
  let i;
  let parent = '';
  let modifiedObj = userInputObj;
  for (i = 0; i < treeNodes.length - 1; ) {
    if (treeNodes[i] === 'repeat') {
      i += 1;
      if (parent + treeNodes[i] in modifiedObj) {
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      } else {
        modifiedObj[parent + treeNodes[i]] = [];
      }
      const index = parseInt(treeNodes[i + 1], 10);
      if (modifiedObj[index]) {
        modifiedObj = modifiedObj[index];
      } else {
        modifiedObj[index] = {};
        modifiedObj = modifiedObj[index];
      }
      parent = parent + treeNodes[i] + '/';
      i += 2;
    } else {
      parent = parent + treeNodes[i + 1] + '/';
      i += 2;
    }
  }
  modifiedObj[parent + treeNodes[treeNodes.length - 1]] = fieldValue;
  return userInputObj;
}

/** returns the value from the user input object
 * @param {any} userInputObj - the user input object
 * @param {string} fieldTreeName - the field Tree name
 * @returns {any} - the value, present in user input object, of the fieldTreeName
 */
export function getValueFromUserInputObj(
  userInputObj: any,
  fieldTreeName: string
): any {
  const treeNodes = fieldTreeName.split('/');
  let i;
  let parent = '';
  let modifiedObj = userInputObj;
  for (i = 0; i < treeNodes.length - 1; ) {
    if (treeNodes[i] === 'repeat') {
      i += 1;
      if (parent + treeNodes[i] in modifiedObj) {
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      } else {
        modifiedObj[parent + treeNodes[i]] = [];
      }
      const index = parseInt(treeNodes[i + 1], 10);
      if (modifiedObj[index]) {
        modifiedObj = modifiedObj[index];
      } else {
        modifiedObj[index] = {};
        modifiedObj = modifiedObj[index];
      }
      parent = parent + treeNodes[i] + '/';
      i += 2;
    } else {
      parent = parent + treeNodes[i + 1] + '/';
      i += 2;
    }
  }
  return modifiedObj[parent + treeNodes[treeNodes.length - 1]];
}

/** evaluates whether the component is minimal or not
 * @param {FieldElement} fieldElement - the constraint expression
 * @returns {boolean} - true if minimal; otherwise, false;
 */
export function shouldComponentBeMinimal(fieldElement: FieldElement): boolean {
  let isMinimal = false;
  if (fieldElement.control && fieldElement.control.appearance) {
    fieldElement.control.appearance === 'minimal'
      ? (isMinimal = true)
      : (isMinimal = false);
  }
  return isMinimal;
}

/** returns the new user input object after emptying the desired grouped values
 * @param {any} userInputObj - the current user input object
 * @param {string} groupTreeName - the group Tree name
 * @returns {any} - the new user input object after emptying the grouped values
 */
export function emptyGroupedValues(
  userInputObj: any,
  groupTreeName: string
): any {
  const treeNodes = groupTreeName.split('/');
  let i;
  let parent = '';
  let modifiedObj = userInputObj;
  for (i = 0; i < treeNodes.length - 1; ) {
    if (treeNodes[i] === 'repeat') {
      i += 1;
      if (parent + treeNodes[i] in modifiedObj) {
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      } else {
        modifiedObj[parent + treeNodes[i]] = [];
      }
      const index = parseInt(treeNodes[i + 1], 10);
      if (modifiedObj[index]) {
        modifiedObj = modifiedObj[index];
      } else {
        modifiedObj[index] = {};
        modifiedObj = modifiedObj[index];
      }
      parent = parent + treeNodes[i] + '/';
      i += 2;
    } else {
      parent = parent + treeNodes[i + 1] + '/';
      i += 2;
    }
  }
  Object.keys(modifiedObj).forEach(objKey => {
    if (objKey.startsWith(parent + treeNodes[treeNodes.length - 1])) {
      modifiedObj[objKey] = null;
    }
  });
  return userInputObj;
}

/** returns whether the grouped values are empty or not
 * @param {any} userInputObj - the current user input object
 * @param {string} groupTreeName - the group Tree name
 * @returns {any} - true if empty; otherwise, false
 */
export function isGroupedValuesEmpty(
  userInputObj: any,
  groupTreeName: string
): any {
  const treeNodes = groupTreeName.split('/');
  let i;
  let parent = '';
  let modifiedObj = userInputObj;
  for (i = 0; i < treeNodes.length - 1; ) {
    if (treeNodes[i] === 'repeat') {
      i += 1;
      if (parent + treeNodes[i] in modifiedObj) {
        modifiedObj = modifiedObj[parent + treeNodes[i]];
      } else {
        modifiedObj[parent + treeNodes[i]] = [];
      }
      const index = parseInt(treeNodes[i + 1], 10);
      if (modifiedObj[index]) {
        modifiedObj = modifiedObj[index];
      } else {
        modifiedObj[index] = {};
        modifiedObj = modifiedObj[index];
      }
      parent = parent + treeNodes[i] + '/';
      i += 2;
    } else {
      parent = parent + treeNodes[i + 1] + '/';
      i += 2;
    }
  }
  let isEmpty: boolean = true;
  Object.keys(modifiedObj).forEach(objKey => {
    if (objKey.startsWith(parent + treeNodes[treeNodes.length - 1])) {
      if (
        (modifiedObj[objKey] !== null || modifiedObj[objKey] !== undefined) &&
        isEmpty
      ) {
        isEmpty = false;
      }
    }
  });
  return isEmpty;
}
