import * as React from 'react';
import { TEXT_FIELD_TYPE } from '../../../constants';
import Text from '../../../containers/fields/base/Text';

/** interface for kobo field element */
export interface FieldElement {
  name: string;
  type: string;
  children?: any[];
  bind?: object;
  label?: string | object;
}

/** props interface for BaseTypeEvaluator component */
export interface BaseTypeEvaluatorProps {
  fieldElement: FieldElement;
}

class BaseTypeEvaluator extends React.Component<BaseTypeEvaluatorProps> {
  public render() {
    const { fieldElement } = this.props;
    return this.typeEvaluator(fieldElement);
  }

  /** returns jsx components based on field types
   * @param {FieldElement} fieldElement - the field element object
   * @return {React.ReactElement} - jsx base components
   */
  private typeEvaluator(fieldElement: FieldElement): React.ReactElement {
    switch (fieldElement.type) {
      case TEXT_FIELD_TYPE:
        return <Text fieldElement={fieldElement} />;
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
