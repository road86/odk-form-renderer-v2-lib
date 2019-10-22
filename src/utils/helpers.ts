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
