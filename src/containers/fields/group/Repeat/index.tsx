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
  assignFieldValueAction,
  emptyGroupFields,
  getEvaluatedExpression,
  getFieldValue,
  isErrorsIncludeGroupFields,
  isGroupFieldsEmpty,
  removeGroupFieldsFromErrors,
} from '../../../../store/ducks/formState';
import {
  getFieldLabelText,
  shouldComponentBeRelevant,
} from '../../../../utils/helpers';

export interface RepeatProps {
  defaultLanguage: string;
  fieldElement: FieldElement;
  fieldValue: any;
  fieldParentTreeName: string;
  getEvaluatedExpressionSelector: any;
  isComponentRender: boolean;
  isGroupFieldsEmptySelector: any;
  isErrorsIncludeGroupFieldsSelector: any;
  emptyGroupFieldsActionCreator: typeof emptyGroupFields;
  removeGroupFieldsFromErrorsActionCreator: typeof removeGroupFieldsFromErrors;
  assignFieldValueActionCreator: typeof assignFieldValueAction;
}

class Repeat extends React.Component<RepeatProps> {
  public render() {
    const {
      fieldValue,
      fieldElement,
      fieldParentTreeName,
      defaultLanguage,
      isComponentRender,
    } = this.props;
    const fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    if (isComponentRender) {
      if (!fieldValue) {
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          [{}]
        );
      }
      return (
        <FormGroup>
          <Label>{fieldLabel}</Label>
          <div className="repeat-fields-body">
            {fieldElement.children && (
              <GroupTypeEvaluator
                fieldElements={fieldElement.children}
                fieldParentTreeName={
                  fieldParentTreeName + 'repeat/' + fieldElement.name + '/'
                }
                defaultLanguage={defaultLanguage}
              />
            )}
          </div>
        </FormGroup>
      );
    } else {
      if (
        this.props.isErrorsIncludeGroupFieldsSelector(
          fieldParentTreeName + 'repeat/' + fieldElement.name + '/'
        )
      ) {
        this.props.removeGroupFieldsFromErrorsActionCreator(
          fieldParentTreeName + 'repeat/' + fieldElement.name + '/'
        );
      }
      if (fieldValue) {
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          null
        );
      }
      return null;
    }
  }
}

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  fieldValue: any;
  getEvaluatedExpressionSelector: any;
  isComponentRender: boolean;
  isGroupFieldsEmptySelector: any;
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
  const isGroupFieldsEmptySelector = (fieldTreeName: string) =>
    isGroupFieldsEmpty(state, fieldTreeName);
  const isErrorsIncludeGroupFieldsSelector = (fieldTreeName: string) =>
    isErrorsIncludeGroupFields(state, fieldTreeName);
  const result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(
      fieldElement,
      fieldParentTreeName,
      getEvaluatedExpressionSelector
    ),
    isErrorsIncludeGroupFieldsSelector,
    isGroupFieldsEmptySelector,
  };
  return result;
};

/** map props to actions */
const mapDispatchToProps = {
  assignFieldValueActionCreator: assignFieldValueAction,
  emptyGroupFieldsActionCreator: emptyGroupFields,
  removeGroupFieldsFromErrorsActionCreator: removeGroupFieldsFromErrors,
};

/** connect Group component to the redux store */
const ConnectedRepeat = connect(
  mapStateToProps,
  mapDispatchToProps
)(Repeat);

export default ConnectedRepeat;
