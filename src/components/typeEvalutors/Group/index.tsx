import * as React from 'react';
import { GROUP_FIELD_TYPE } from '../../../constants';
import BaseTypeEvaluator, { FieldElement } from '../Base';

/** props Interface for the GroupTypeEvaluator component */
export interface GroupTypeEvaluatorProps {
  fieldElements: FieldElement[];
}

class GroupTypeEvaluator extends React.Component<GroupTypeEvaluatorProps> {
  public render() {
    const { fieldElements } = this.props;
    return (
      <div>
        {fieldElements.map(fieldElement => (
          <div key={'group_' + fieldElement.name}>
            {this.typeEvaluator(fieldElement)}
          </div>
        ))}
      </div>
    );
  }

  /** returns jsx components based on field types
   * @param {FieldElement} fieldElement - the field element object
   * @return {React.ReactElement} - jsx group components/ base evaluator component
   */
  private typeEvaluator(fieldElement: FieldElement): React.ReactElement {
    switch (fieldElement.type) {
      case GROUP_FIELD_TYPE:
        return (
          <div>
            GROUP {fieldElement.type} {fieldElement.name}
          </div>
        );
      default:
        return <BaseTypeEvaluator fieldElement={fieldElement} />;
    }
  }
}

export default GroupTypeEvaluator;
