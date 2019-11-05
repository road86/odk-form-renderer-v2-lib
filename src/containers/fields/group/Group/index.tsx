import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { FieldElement } from '../../../../components/typeEvalutors/Base';
import GroupTypeEvaluator from '../../../../components/typeEvalutors/Group';
import { getFieldLabelText } from '../../../../utils/helpers';

export interface GroupProps {
  defaultLanguage: string;
  fieldElement: FieldElement;
  fieldParentTreeName: string;
}

class Group extends React.Component<GroupProps> {
  public render() {
    const { fieldElement, fieldParentTreeName, defaultLanguage } = this.props;
    const fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    return (
      <FormGroup>
        <Label>{fieldLabel}</Label>
        {fieldElement.children && (
          <GroupTypeEvaluator
            fieldElements={fieldElement.children}
            fieldParentTreeName={
              fieldParentTreeName + 'group/' + fieldElement.name + '/'
            }
            defaultLanguage={defaultLanguage}
          />
        )}
      </FormGroup>
    );
  }
}

export default Group;
