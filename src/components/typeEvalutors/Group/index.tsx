import * as React from 'react';
import { GROUP_FIELD_TYPE } from '../../../constants';
import GROUP from '../../../containers/fields/group/Group';
import BaseTypeEvaluator, { FieldElement, FieldParentTreeName } from '../Base';

/** props Interface for the GroupTypeEvaluator component */
export interface GroupTypeEvaluatorProps {
  defaultLanguage: string;
  fieldElements: FieldElement[];
  fieldParentTreeName: string;
}

class GroupTypeEvaluator extends React.Component<GroupTypeEvaluatorProps> {
  public render() {
    const { fieldElements, fieldParentTreeName, defaultLanguage } = this.props;
    return (
      <div>
        {fieldElements.map(fieldElement => (
          <div key={'group_' + fieldElement.name}>
            {this.typeEvaluator(
              fieldElement,
              fieldParentTreeName,
              defaultLanguage
            )}
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
    fieldParentTreeName: FieldParentTreeName,
    defaultLanguage: string
  ): React.ReactElement {
    switch (fieldElement.type) {
      case GROUP_FIELD_TYPE:
        return (
          <div>
            <GROUP
              fieldElement={fieldElement}
              fieldParentTreeName={fieldParentTreeName}
              defaultLanguage={defaultLanguage}
            />
          </div>
        );
      default:
        return (
          <BaseTypeEvaluator
            fieldElement={fieldElement}
            fieldParentTreeName={fieldParentTreeName}
            defaultLanguage={defaultLanguage}
          />
        );
    }
  }
}

export default GroupTypeEvaluator;
