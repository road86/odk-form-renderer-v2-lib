import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Label } from 'reactstrap';
import { Store } from 'redux';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../../components/typeEvalutors/Base';
import {
  assignFieldValueAction,
  emptyGroupFields,
  getEvaluatedExpression,
  getFieldValue,
  isErrorsIncludeGroupFields,
  isGroupFieldsEmpty,
  RemoveFromOptionList,
  removeGroupFieldsFromErrors,
} from '../../../../../store/ducks/formState';
import {
  getFieldLabelText,
  shouldComponentBeRelevant,
} from '../../../../../utils/helpers';
import SingleRepeat from '.././Single Repeat';

export interface ControlledRepeatProps {
  csvList: any;
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
  removeOptionListFromActionCreator: typeof RemoveFromOptionList;
}

class ControlledRepeat extends React.Component<ControlledRepeatProps> {
  public render() {
    const {
      csvList,
      fieldValue,
      fieldElement,
      fieldParentTreeName,
      defaultLanguage,
      isComponentRender,
      assignFieldValueActionCreator,
      removeGroupFieldsFromErrorsActionCreator,
      removeOptionListFromActionCreator,
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
        <FormGroup className={'groupBody'}>
          <Label>{fieldLabel}</Label>
          {fieldValue &&
            // tslint:disable-next-line: variable-name
            fieldValue.map((_elm: any, index: any) => (
              <div className="repeat-fields-body" key={'repeat' + index}>
                <SingleRepeat
                  defaultLanguage={defaultLanguage}
                  fieldElement={fieldElement}
                  fieldParentTreeName={fieldParentTreeName}
                  fieldValue={fieldValue}
                  repeatIndex={index}
                  assignmentHandler={assignFieldValueActionCreator}
                  removeHandler={removeGroupFieldsFromErrorsActionCreator}
                  removeOptionHandler={removeOptionListFromActionCreator}
                  csvList={csvList}
                  unControlFlag={false}
                />
              </div>
            ))}
          <div>
            <span onClick={this.addAnotherRepeat}>
              <FontAwesomeIcon icon="plus-circle" className={'plusIcon'} />
            </span>
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

  // tslint:disable-next-line: variable-name
  private addAnotherRepeat = (_event: React.MouseEvent<HTMLDivElement>) => {
    const { fieldValue, fieldParentTreeName, fieldElement } = this.props;
    const newFieldValue = [...fieldValue];
    newFieldValue.push({});
    this.props.assignFieldValueActionCreator(
      fieldParentTreeName + fieldElement.name,
      newFieldValue
    );
  };
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
  removeOptionListFromActionCreator: RemoveFromOptionList,
};

/** connect Group component to the redux store */
const ConnectedControlledRepeat = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlledRepeat);

export default ConnectedControlledRepeat;
