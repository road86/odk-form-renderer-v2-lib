import { FieldElement } from '../components/typeEvalutors/Base';
import {
  REQUIRED_INPUT_SUFFIX_TEXT,
  REQUIRED_LABEL_SUFFIX_TEXT,
} from '../constants';

/**
 * @returns fieldElemet Label text
 * @param fieldElement
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
 * @returns required property
 * @param fieldElement
 */
export function getLabelSuffixText(fieldElement: FieldElement): string {
  let textSuffix = '';
  if (isInputRequired(fieldElement)) {
    textSuffix = REQUIRED_LABEL_SUFFIX_TEXT;
  }
  return textSuffix;
}

/**
 * @returns required property
 * @param fieldElement
 */
export function getInputSuffixText(fieldElement: FieldElement): string {
  let inputSuffix = '';
  if (isInputRequired(fieldElement)) {
    inputSuffix = REQUIRED_INPUT_SUFFIX_TEXT;
  }
  return inputSuffix;
}

/**
 * @returns boolean value by calculating fieldElement required properties
 * @param fieldElement
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
 * @returns boolean by checking required text
 * @param requiredString
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
