import * as React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Input, Label } from 'reactstrap';
import { Store } from 'redux';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../../components/typeEvalutors/Base';
import { REQUIRED_FIELD_MSG, REQUIRED_SYMBOL } from '../../../../../constants';
import {
  addErrorInputId,
  assignFieldValueAction,
  getEvaluatedExpression,
  getFieldValue,
  isPresentInError,
  removeErrorInputId,
} from '../../../../../store/ducks/formState';
import {
  getConstraintLabelText,
  getFieldLabelText,
  isInputRequired,
  shouldComponentBeReadOnly,
  shouldComponentBeRelevant,
  shouldInputViolatesConstraint,
} from '../../../../../utils/helpers';

/** props interface for the SelectAll Radio component */
export interface SelectAllRadioProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  fieldValue: string;
  assignFieldValueActionCreator: typeof assignFieldValueAction;
  getEvaluatedExpressionSelector: any;
  isComponentRender: boolean;
  isPresentInErrorSelector: any;
  addErrorInputIdActionCreator: typeof addErrorInputId;
  removeErrorInputIdActionCreator: typeof removeErrorInputId;
  defaultLanguage: string;
}

export interface Options {
  label: number;
  value: string;
}

class SelectAllRadio extends React.Component<SelectAllRadioProps> {
  public render() {
    const {
      fieldElement,
      fieldParentTreeName,
      fieldValue,
      isComponentRender,
      getEvaluatedExpressionSelector,
      isPresentInErrorSelector,
      defaultLanguage,
    } = this.props;
    const isRequired = isInputRequired(fieldElement);
    const isRequiredViolated = isRequired && (!fieldValue || fieldValue === '');
    const isConstraintViolated =
      fieldValue &&
      fieldValue !== '' &&
      shouldInputViolatesConstraint(
        fieldElement,
        fieldParentTreeName,
        getEvaluatedExpressionSelector
      );
    const fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    const constraintLabel = getConstraintLabelText(
      fieldElement,
      defaultLanguage
    );
    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          fieldElement.default
        );
      }
      const isReadonly = shouldComponentBeReadOnly(
        fieldElement,
        fieldParentTreeName,
        getEvaluatedExpressionSelector
      );
      if (
        (isRequiredViolated || isConstraintViolated) &&
        !isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)
      ) {
        this.props.addErrorInputIdActionCreator(
          fieldParentTreeName + fieldElement.name
        );
      } else if (
        !isRequiredViolated &&
        !isConstraintViolated &&
        isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)
      ) {
        this.props.removeErrorInputIdActionCreator(
          fieldParentTreeName + fieldElement.name
        );
      }

      if (fieldElement.children) {
        return (
          <FormGroup>
            <Label>{fieldLabel}</Label>
            {isRequired && <Label>{REQUIRED_SYMBOL}</Label>}
            {fieldElement.children.map((elem, index) => (
              <div key={index} className="col-md-12">
                <Input
                  key={fieldElement.name + '-' + index}
                  type="checkbox"
                  name={fieldElement.name}
                  value={elem.name}
                  onChange={this.onChangeHandlerCheckBox(
                    fieldElement.name,
                    fieldValue
                  )}
                  readOnly={isReadonly}
                />{' '}
                {elem.name}
              </div>
            ))}
            {isRequiredViolated && <Label>{REQUIRED_FIELD_MSG}</Label>}
            {isConstraintViolated && <Label>{constraintLabel}</Label>}
          </FormGroup>
        );
      } else {
        return null;
      }
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          null
        );
        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(
            fieldParentTreeName + fieldElement.name
          );
        }
      }
      return null;
    }
  }

  /** sets the value of Check Button field element in store
   * @param {any} event - the onchange input event
   * @param {any} fieldName - the input name
   */
  private onChangeHandlerCheckBox = (fieldName: any, fieldValue: any) => (
    event: any
  ) => {
    const selectedValues: any = [];
    if (event.target.checked) {
      if (fieldValue === '') {
        selectedValues.push(event.target.value);
        this.props.assignFieldValueActionCreator(
          this.props.fieldParentTreeName + fieldName,
          selectedValues || []
        );
      } else {
        if (fieldValue.length > 0) {
          let i = 0;
          fieldValue.map(() => {
            if (!selectedValues.includes(fieldValue[i])) {
              selectedValues.push(fieldValue[i]);
            }
            i++;
          });

          selectedValues.push(event.target.value);
          this.props.assignFieldValueActionCreator(
            this.props.fieldParentTreeName + fieldName,
            selectedValues || []
          );
        }
      }
    } else {
      const filteredValues: any = [];
      if (fieldValue.length > 0) {
        let i = 0;
        fieldValue.map(() => {
          filteredValues.push(fieldValue[i]);
          i++;
        });
        const idx = filteredValues.indexOf(event.target.value);
        filteredValues.splice(idx, 1);
        this.props.assignFieldValueActionCreator(
          this.props.fieldParentTreeName + fieldName,
          filteredValues || []
        );
      }
    }
  };
}

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  fieldValue: string;
  getEvaluatedExpressionSelector: any;
  isComponentRender: boolean;
  isPresentInErrorSelector: any;
}

/** Interface to describe props from parent */
interface ParentProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
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
  const isPresentInErrorSelector = (fieldTreeName: string) =>
    isPresentInError(state, fieldTreeName);
  const result = {
    fieldValue: getFieldValue(state, fieldElement.name),
    getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(
      fieldElement,
      fieldParentTreeName,
      getEvaluatedExpressionSelector
    ),
    isPresentInErrorSelector,
  };
  return result;
};

/** map props to actions */
const mapDispatchToProps = {
  addErrorInputIdActionCreator: addErrorInputId,
  assignFieldValueActionCreator: assignFieldValueAction,
  removeErrorInputIdActionCreator: removeErrorInputId,
};

/** connect SelectOne Radio component to the redux store */
const ConnectedSelectAllRadio = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAllRadio);

export default ConnectedSelectAllRadio;
