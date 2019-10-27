import * as React from 'react';
import { GROUP_FIELD_TYPE } from '../../../constants';
import GROUP from '../../../containers/fields/group/Group';
import BaseTypeEvaluator, { FieldElement, FieldParentTreeName } from '../Base';

/** props Interface for the GroupTypeEvaluator component */
export interface GroupTypeEvaluatorProps {
  fieldElements: FieldElement[];
  fieldParentTreeName: string;
}

class GroupTypeEvaluator extends React.Component<GroupTypeEvaluatorProps> {
  public render() {
    const { fieldElements, fieldParentTreeName } = this.props;
    return (
      <div>
        {fieldElements.map(fieldElement => (
          <div key={'group_' + fieldElement.name}>
            {this.typeEvaluator(fieldElement, fieldParentTreeName)}
          </div>
        ))}
      </div>
    );
  }

  /** returns jsx components based on field types
   * @param {FieldElement} fieldElement - the field element object
   * @param {FieldParentTreeName} - the field parent hierarchical name
   * @return {React.ReactElement} - jsx group components/ base evaluator component
   */
  private typeEvaluator(
    fieldElement: FieldElement,
    fieldParentTreeName: FieldParentTreeName
  ): React.ReactElement {
    switch (fieldElement.type) {
      case GROUP_FIELD_TYPE:
        return (
          <div>
            <GROUP
              fieldElement={fieldElement}
              fieldParentTreeName={fieldParentTreeName}
            />
          </div>
        );
      default:
        return (
          <BaseTypeEvaluator
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
          />
        );
    }
  }
}

export default GroupTypeEvaluator;
