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

export interface UncontrolledRepeatProps {
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

class UncontrolledRepeat extends React.Component<UncontrolledRepeatProps> {
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
          []
        );
      }

      let noOfJrCount: number = 0;

      if (fieldElement.control) {
        const jrCount: string = 'jr:count';
        const res: any = fieldElement.control[jrCount];

        if (/^[0-9]*$/i.test(res)) {
          noOfJrCount = parseInt(res, 10);
        } else {
          const value: any = this.props.getEvaluatedExpressionSelector(
            res,
            fieldParentTreeName + fieldElement.name
          );
          if (value) {
            noOfJrCount = parseInt(value, 10);
          }
        }
      }

      if (
        fieldValue &&
        fieldValue.length === 0 &&
        noOfJrCount === 0 &&
        this.props.isErrorsIncludeGroupFieldsSelector(
          fieldParentTreeName + 'repeat/' + fieldElement.name + '/'
        )
      ) {
        this.props.removeGroupFieldsFromErrorsActionCreator(
          fieldParentTreeName + 'repeat/' + fieldElement.name + '/'
        );
      }

      if (fieldValue && fieldValue.length > 0 && noOfJrCount === 0) {
        this.removeFromError();
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          []
        );
      }

      if (noOfJrCount > 0) {
        const newFieldValue = [...fieldValue];

        if (fieldValue && fieldValue.length < noOfJrCount) {
          const iterate = noOfJrCount - fieldValue.length;
          for (let j = 0; j < iterate; j++) {
            newFieldValue.push({});
          }
        }

        if (fieldValue && fieldValue.length > noOfJrCount) {
          const iterate = fieldValue.length - noOfJrCount;
          for (let i = 0; i < iterate; i++) {
            newFieldValue.pop();
          }
          this.props.assignFieldValueActionCreator(
            fieldParentTreeName + fieldElement.name,
            newFieldValue
          );
          this.removeFromError();
        }

        return (
          <FormGroup className={'groupBodyUnControlled'}>
            <Label>{fieldLabel}</Label>
            {newFieldValue &&
              // tslint:disable-next-line: variable-name
              newFieldValue.map((_elm: any, index: any) => (
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
                    unControlFlag={true}
                  />
                </div>
              ))}
          </FormGroup>
        );
      } else {
        return null;
      }
    } else {
      this.removeFromError();
      if (fieldValue) {
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          null
        );
      }
      return null;
    }
  }

  private removeFromError() {
    if (
      this.props.isErrorsIncludeGroupFieldsSelector(
        this.props.fieldParentTreeName +
          'repeat/' +
          this.props.fieldElement.name +
          '/'
      )
    ) {
      this.props.removeGroupFieldsFromErrorsActionCreator(
        this.props.fieldParentTreeName +
          'repeat/' +
          this.props.fieldElement.name +
          '/'
      );
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
  removeOptionListFromActionCreator: RemoveFromOptionList,
};

/** connect Repeat component to the redux store */
const ConnectedUncontrolledRepeat = connect(
  mapStateToProps,
  mapDispatchToProps
)(UncontrolledRepeat);

export default ConnectedUncontrolledRepeat;
