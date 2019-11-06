import * as React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Label } from 'reactstrap';
import { Store } from 'redux';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../components/typeEvalutors/Base';
import GroupTypeEvaluator from '../../../../components/typeEvalutors/Group';
import {
  emptyGroupFields,
  getEvaluatedExpression,
  isErrorsIncludeGroupFields,
  removeGroupFieldsFromErrors,
} from '../../../../store/ducks/formState';
import {
  checkGroupedValuesForEmpty,
  getFieldLabelText,
  shouldComponentBeRelevant,
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
  checkGroupedValuesForEmptySelector: any;
  isErrorsIncludeGroupFieldsSelector: any;
}

/** Interface to describe props from parent */
interface ParentProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  defaultLanguage: string;
}

/** Map props to state  */
const mapStateToProps = (
  state: Partial<Store>,
  parentProps: ParentProps
): DispatchedStateProps => {
  const { fieldElement, fieldParentTreeName } = parentProps;
  const getEvaluatedExpressionSelector = (
    expression: string,
    fieldTreeName: string
  ) => getEvaluatedExpression(state, expression, fieldTreeName);
  const checkGroupedValuesForEmptySelector = (fieldTreeName: string) =>
    checkGroupedValuesForEmpty(state, fieldTreeName);
  const isErrorsIncludeGroupFieldsSelector = (fieldTreeName: string) =>
    isErrorsIncludeGroupFields(state, fieldTreeName);
  const result = {
    checkGroupedValuesForEmptySelector,
    getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(
      fieldElement,
      fieldParentTreeName,
      getEvaluatedExpressionSelector
    ),
    isErrorsIncludeGroupFieldsSelector,
  };
  return result;
};

/** map props to actions */
const mapDispatchToProps = {
  emptyGroupFieldsActionCreator: emptyGroupFields,
  removeGroupFieldsFromErrorsActionCreator: removeGroupFieldsFromErrors,
};

/** connect Group component to the redux store */
const ConnectedGroup = connect(
  mapStateToProps,
  mapDispatchToProps
)(Group);

export default ConnectedGroup;
