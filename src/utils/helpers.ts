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
    const isConstraintViolated = evaluateExpression(
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
