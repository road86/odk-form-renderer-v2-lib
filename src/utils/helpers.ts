import { FieldElement } from '../components/typeEvalutors/Base';
import { REQUIRED_FIELD_MSG, REQUIRED_SYMBOL } from '../constants';

/**
 * get the result of field label
 * @param fieldElement
 * @returns {string} - fieldElemet Label text
 */
export default function getFieldLabelText(fieldElement: FieldElement) {
  let fieldLabel = '';
  if (fieldElement.label) {
    if (typeof fieldElement.label === 'string') {
      fieldLabel = fieldElement.label;
    } else {
      if ('English' in fieldElement.label) {
        fieldLabel = fieldElement.label.English;
      }
    }
  }
  return fieldLabel;
}

/**
 * get the visible result of label suffix string
 * @param fieldElement
 * @return {string} - returns property
 */
export function getLabelSuffixText(fieldElement: FieldElement): string {
  let textSuffix = '';
  if (isInputRequired(fieldElement)) {
    textSuffix = REQUIRED_SYMBOL;
  }
  return textSuffix;
}

/**
 * get the visible result of input suffix string
 * @param fieldElement
 * @return {string} - required property
 */
export function getInputSuffixText(fieldElement: FieldElement): string {
  let inputSuffix = '';
  if (isInputRequired(fieldElement)) {
    inputSuffix = REQUIRED_FIELD_MSG;
  }
  return inputSuffix;
}

/**
 * get the boolean result of fieldElement string
 * @param fieldElement
 * @return {boolean} - boolean value by calculating fieldElement required properties
 */
function isInputRequired(fieldElement: FieldElement): boolean {
  let isRequired = false;
  if (fieldElement.bind) {
    if (fieldElement.bind.required) {
      if (
        typeof fieldElement.bind.required === 'string' &&
        isRequiredFn(fieldElement.bind.required.toString())
      ) {
        isRequired = true;
      }
    }
  }
  return isRequired;
}

/**
 * get the boolean result of required string
 * @param {string} - required string
 * @returns {boolean} - boolean by checking required text
 */
function isRequiredFn(requiredString: string): boolean {
  if (
    requiredString.toLowerCase() === 'yes' ||
    requiredString === '1' ||
    requiredString.toLowerCase() === 'true'
  ) {
    return true;
  } else {
    return false;
  }
}
