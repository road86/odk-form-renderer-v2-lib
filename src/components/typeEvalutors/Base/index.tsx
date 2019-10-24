import * as React from 'react';
import {
  DATE_FIELD_TYPE,
  INTEGER_FIELD_TYPE,
  TEXT_FIELD_TYPE,
} from '../../../constants';
import Date from '../../../containers/fields/base/Date';
import Integer from '../../../containers/fields/base/Integer';
import Text from '../../../containers/fields/base/Text';

/** type of fieldParentTreeName */
export type FieldParentTreeName = string;

/** interface for bind property */
interface BindProperty {
  calculate?: string;
  relevant?: string;
  readonly?: string;
  appearance?: string;
  required?: string;
}

/** interface for kobo field element */
export interface FieldElement {
  name: string;
  type: string;
  children?: any[];
  bind?: BindProperty;
  label?: { [key: string]: string } | string;
}

/** props interface for BaseTypeEvaluator component */
export interface BaseTypeEvaluatorProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
}

class BaseTypeEvaluator extends React.Component<BaseTypeEvaluatorProps> {
  public render() {
    const { fieldElement, fieldParentTreeName } = this.props;
    return this.typeEvaluator(fieldElement, fieldParentTreeName);
  }

  /** returns jsx components based on field types
   * @param {FieldElement} fieldElement - the field element object
   * @param {FieldParentTreeName} fieldParentTreeName - the field parent hierchical name
   * @return {React.ReactElement} - jsx base components
   */
  private typeEvaluator(
    fieldElement: FieldElement,
    fieldParentTreeName: FieldParentTreeName
  ): React.ReactElement {
    switch (fieldElement.type) {
      case TEXT_FIELD_TYPE:
        return (
          <Text
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
          />
        );
      case DATE_FIELD_TYPE:
        return <Date fieldElement={fieldElement} />;
      case INTEGER_FIELD_TYPE:
        return <Integer fieldElement={fieldElement} />;
      default:
        return (
          <div>
            Other {fieldElement.type} {fieldElement.name}
          </div>
        );
    }
  }
}

export default BaseTypeEvaluator;
