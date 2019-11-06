import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../components/typeEvalutors/Base';
import GroupTypeEvaluator from '../../../../components/typeEvalutors/Group';
import { isErrorsIncludeGroupFields } from '../../../../store/ducks/formState';
import {
  checkGroupedValuesForEmpty,
  getFieldLabelText,
} from '../../../../utils/helpers';

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

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  getEvaluatedExpressionSelector: any;
  isComponentRender: boolean;
  checkGroupedValuesForEmptySelector: typeof checkGroupedValuesForEmpty;
  isErrorsIncludeGroupFieldsSelector: typeof isErrorsIncludeGroupFields;
}

/** Interface to describe props from parent */
interface ParentProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  defaultLanguage: string;
}

export default Group;
