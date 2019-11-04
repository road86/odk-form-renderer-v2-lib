import * as React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';
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
  shouldComponentBeRelevant,
  shouldInputViolatesConstraint,
} from '../../../../../utils/helpers';

/** props interface for the SelectOne component */
export interface SelectOneDropDownProps {
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

class SelectOneDropDown extends React.Component<SelectOneDropDownProps> {
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
          fieldElement.name,
          fieldElement.default
        );
      }

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

      const options: Options[] = [];
      if (fieldElement.children) {
        fieldElement.children.map(elem =>
          options.push({ label: elem.name, value: elem.name })
        );
      }

      return (
        <FormGroup>
          <Label>{fieldLabel}</Label>
          {isRequired && <Label>{REQUIRED_SYMBOL}</Label>}
          <Select
            multi={false}
            name={fieldElement.name}
            options={options}
            onChange={this.onChangeHandler(fieldElement.name)}
          />
          {isRequiredViolated && <Label>{REQUIRED_FIELD_MSG}</Label>}
          {isConstraintViolated && <Label>{constraintLabel}</Label>}
        </FormGroup>
      );
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldElement.name, null);
        if (isPresentInErrorSelector(fieldParentTreeName + fieldElement.name)) {
          this.props.removeErrorInputIdActionCreator(
            fieldParentTreeName + fieldElement.name
          );
        }
      }
      return null;
    }
  }

  /** sets the value of field element in store
   * @param {any} event - the onchange input event
   * @param {any} fieldParentTreeName - the input name
   */
  private onChangeHandler = (fieldParentTreeName: any) => (event: any) => {
    this.props.assignFieldValueActionCreator(fieldParentTreeName, event.value);
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
    fieldValue: getFieldValue(state, fieldElement.name) || '',
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

/** connect SelectOne component to the redux store */
const ConnectedSelectOneDropDown = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectOneDropDown);

export default ConnectedSelectOneDropDown;
