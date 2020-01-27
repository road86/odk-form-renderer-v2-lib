import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { connect } from 'react-redux';
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
  getFormSubmitStatus,
  isPresentInError,
  removeErrorInputId,
} from '../../../../store/ducks/formState';
import {
  customizeLabelsWithPreviousInputs,
  getConstraintLabelText,
  getFieldLabelText,
  getHintLabelText,
  isInputRequired,
  shouldComponentBeReadOnly,
  shouldComponentBeRelevant,
  shouldInputViolatesConstraint,
} from '../../../../utils/helpers';

/** props interface for the integer component */
export interface IntegerProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  fieldValue: any;
  assignFieldValueActionCreator: typeof assignFieldValueAction;
  getEvaluatedExpressionSelector: any;
  getFormSubmitStatusSelector: boolean;
  isComponentRender: boolean;
  isPresentInErrorSelector: any;
  addErrorInputIdActionCreator: typeof addErrorInputId;
  removeErrorInputIdActionCreator: typeof removeErrorInputId;
  defaultLanguage: string;
}
export interface IntegerState {
  fieldValue: string;
  isFocused: boolean;
}
class Integer extends React.Component<IntegerProps, IntegerState> {
  constructor(props: IntegerProps) {
    super(props);
    this.state = { fieldValue: '', isFocused: false };
  }
  public render() {
    const {
      fieldElement,
      fieldParentTreeName,
      fieldValue,
      isComponentRender,
      getEvaluatedExpressionSelector,
      getFormSubmitStatusSelector,
      isPresentInErrorSelector,
      defaultLanguage,
    } = this.props;
    const isRequired = isInputRequired(fieldElement);

    const isRequiredViolated =
      isRequired &&
      (fieldValue === null || fieldValue === '' || fieldValue === undefined);

    const isConstraintViolated =
      fieldValue !== '' &&
      fieldValue !== null &&
      fieldValue !== undefined &&
      shouldInputViolatesConstraint(
        fieldElement,
        fieldParentTreeName,
        getEvaluatedExpressionSelector
      );

    const fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    const modifiedFieldLabel = customizeLabelsWithPreviousInputs(
      getEvaluatedExpressionSelector,
      fieldLabel,
      fieldParentTreeName + fieldElement.name
    );
    const constraintLabel = getConstraintLabelText(
      fieldElement,
      defaultLanguage
    );
    const modifiedConstraintLabel =
      customizeLabelsWithPreviousInputs(
        getEvaluatedExpressionSelector,
        constraintLabel,
        fieldParentTreeName + fieldElement.name
      ) || '';
    const hintLabel = getHintLabelText(fieldElement, defaultLanguage);
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
      if (typeof this.props.fieldValue === 'string') {
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          parseInt(this.props.fieldValue, 10)
        );
      }

      let modifiedValue: any;
      {
        fieldValue === 0 ? (modifiedValue = '0') : (modifiedValue = fieldValue);
      }

      const isError = isPresentInErrorSelector(
        fieldParentTreeName + fieldElement.name
      );

      return (
        <FormGroup>
          <Label>
            {modifiedFieldLabel}{' '}
            {isRequired && (
              <span className="requiredTextSteric">{REQUIRED_SYMBOL}</span>
            )}
          </Label>
          <Input
            type="number"
            name={fieldElement.name}
            onChange={this.onChangeHandler}
            onBlur={this.onBlurHandler}
            value={
              this.state.isFocused
                ? this.state.fieldValue || ''
                : modifiedValue || ''
            }
            readOnly={isReadonly}
          />
          {getFormSubmitStatusSelector && isError && (
            <FontAwesomeIcon icon="exclamation-circle" className="errorSign" />
          )}
          {fieldElement.hint && <Label className="hintText">{hintLabel}</Label>}
          {isRequiredViolated && (
            <Label className="requiredText">{REQUIRED_FIELD_MSG}</Label>
          )}
          {isConstraintViolated && (
            <Label className="constraintText">{modifiedConstraintLabel}</Label>
          )}
        </FormGroup>
      );
    } else {
      if (this.state.isFocused) {
        this.setState({ ...this.state, isFocused: false });
      }
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
  /** sets the value of field element in store
   * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
   */
  private onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      fieldValue: event.currentTarget.value || '',
      isFocused: true,
    });
  };

  private onBlurHandler = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      fieldValue: event.currentTarget.value || '',
      isFocused: false,
    });
    this.props.assignFieldValueActionCreator(
      this.props.fieldParentTreeName + event.currentTarget.name,
      event.currentTarget.value !== ''
        ? parseInt(event.currentTarget.value, 10)
        : null
    );
  };
}
/** connect the component to the store */
/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  fieldValue: any;
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
  const getFormSubmitStatusSelector = getFormSubmitStatus(state);
  const result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
    getEvaluatedExpressionSelector,
    getFormSubmitStatusSelector,
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
/** connect Integer component to the redux store */
const ConnectedInteger = connect(
  mapStateToProps,
  mapDispatchToProps
)(Integer);
export default ConnectedInteger;
