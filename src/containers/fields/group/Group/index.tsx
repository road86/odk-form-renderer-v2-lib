import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { FieldElement } from '../../../../components/typeEvalutors/Base';
import GroupTypeEvaluator from '../../../../components/typeEvalutors/Group';
import { getFieldLabelText } from '../../../../utils/helpers';

export interface GroupProps {
  fieldElement: FieldElement;
  fieldParentTreeName: string;
}

class Group extends React.Component<GroupProps> {
  public render() {
    const { fieldElement, fieldParentTreeName } = this.props;
    const fieldLabel = getFieldLabelText(fieldElement, 'English');
    return (
      <FormGroup>
        <Label>{fieldLabel}</Label>
        {fieldElement.children && (
          <GroupTypeEvaluator
            fieldElements={fieldElement.children}
            fieldParentTreeName={
              fieldParentTreeName + 'group/' + fieldElement.name + '/'
            }
          />
        )}
      </FormGroup>
    );
  }
}

export default Group;
