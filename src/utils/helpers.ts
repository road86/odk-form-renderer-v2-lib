import { FieldElement } from '../components/typeEvalutors/Base';

export default function labelEvaluater(fieldElement: FieldElement) {
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

export function getLabelSuffixText(fieldElement: FieldElement): string {
  let textSuffix = '';
  if (isRequiredProperties(fieldElement)) {
    textSuffix = '*';
  }
  return textSuffix;
}

export function getInputSuffixText(fieldElement: FieldElement): string {
  let inputSuffix = '';
  if (isRequiredProperties(fieldElement)) {
    inputSuffix = 'This field is required';
  }
  return inputSuffix;
}

function isRequiredProperties(fieldElement: FieldElement): boolean {
  let isRequired = false;
  if (fieldElement.bind) {
    if (fieldElement.bind.required) {
      if (
        typeof fieldElement.bind.required === 'string' &&
        fieldElement.bind.required === 'Yes'
      ) {
        isRequired = true;
      }
    }
  }
  return isRequired;
}
