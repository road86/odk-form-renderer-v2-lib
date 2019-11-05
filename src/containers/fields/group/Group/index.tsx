import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { FieldElement } from '../../../../components/typeEvalutors/Base';
import BaseTypeEvaluator from '../../../../components/typeEvalutors/Base/';
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
        {fieldElement.children &&
          fieldElement.children.map((elem, index) => (
            <div key={index}>
              <BaseTypeEvaluator
                fieldElement={elem}
                fieldParentTreeName={fieldParentTreeName}
                defaultLanguage={defaultLanguage}
              />
            </div>
          ))}
      </FormGroup>
    );
  }
}

export default Group;
