import * as React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { FormGroup, Input, Label } from 'reactstrap';
import { Store } from 'redux';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../components/typeEvalutors/Base';
import { REQUIRED_FIELD_MSG, REQUIRED_SYMBOL } from '../../../../constants';
import {
  addErrorInputId,
  assignFieldValueAction,
  getEvaluatedExpression,
  getFieldValue,
  isPresentInError,
  removeErrorInputId,
} from '../../../../store/ducks/formState';
import {
  getConstraintLabelText,
  getFieldLabelText,
  isInputRequired,
  shouldComponentBeReadOnly,
  shouldComponentBeRelevant,
  shouldInputViolatesConstraint,
} from '../../../../utils/helpers';

/** props interface for the SelectOne component */
export interface SelectOneProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  fieldValue: string;
  assignFieldValueActionCreator: typeof assignFieldValueAction;
  getEvaluatedExpressionSelector: any;
  isComponentRender: boolean;
  isPresentInErrorSelector: any;
  addErrorInputIdActionCreator: typeof addErrorInputId;
  removeErrorInputIdActionCreator: typeof removeErrorInputId;
}

export interface Options {
  label: number;
  value: string;
}

class SelectOne extends React.Component<SelectOneProps> {
  public render() {
    const {
      fieldElement,
      fieldParentTreeName,
      fieldValue,
      isComponentRender,
      getEvaluatedExpressionSelector,
      isPresentInErrorSelector,
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
    const fieldLabel = getFieldLabelText(fieldElement, 'English');
    const constraintLabel = getConstraintLabelText(fieldElement, 'English');
    if (isComponentRender) {
      if (fieldValue == null && 'default' in fieldElement) {
        this.props.assignFieldValueActionCreator(
          fieldElement.name,
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
      let isMinimal = false;
      if (fieldElement.control && fieldElement.control.appearance) {
        fieldElement.control.appearance === 'minimal'
          ? (isMinimal = true)
          : (isMinimal = false);
      }

      if (isMinimal) {
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
              isDisabled={isReadonly}
            />
            {isRequiredViolated && <Label>{REQUIRED_FIELD_MSG}</Label>}
            {isConstraintViolated && <Label>{constraintLabel}</Label>}
          </FormGroup>
        );
      } else {
        if (fieldElement.children) {
          return (
            <FormGroup>
              <Label>{fieldLabel}</Label>
              {fieldElement.children.map((elem, index) => (
                <div key={index} className="col-md-12">
                  <Input
                    type="radio"
                    name={fieldElement.name}
                    value={elem.name}
                    onChange={this.onChangeHandlerRadio(fieldElement.name)}
                  />{' '}
                  {elem.name}
                </div>
              ))}
            </FormGroup>
          );
        } else {
          return null;
        }
      }
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

  /** sets the value of Radio Button field element in store
   * @param {any} event - the onchange input event
   * @param {any} fieldParentTreeName - the input name
   */
  private onChangeHandlerRadio = (fieldParentTreeName: any) => (event: any) => {
    this.props.assignFieldValueActionCreator(
      fieldParentTreeName,
      event.target.value
    );
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
const ConnectedSelectOne = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectOne);

export default ConnectedSelectOne;
