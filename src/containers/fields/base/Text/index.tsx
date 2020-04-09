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

/** props interface for the text component */
export interface TextProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  fieldValue: string;
  assignFieldValueActionCreator: typeof assignFieldValueAction;
  getEvaluatedExpressionSelector: any;
  getFormSubmitStatusSelector: boolean;
  isPresentInErrorSelector: any;
  isComponentRender: boolean;
  addErrorInputIdActionCreator: typeof addErrorInputId;
  removeErrorInputIdActionCreator: typeof removeErrorInputId;
  defaultLanguage: string;
}

export interface TextState {
  fieldValue: string;
  isFocused: boolean;
}

class Text extends React.Component<TextProps, TextState> {
  constructor(props: TextProps) {
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
    const modifiedFieldLabel = customizeLabelsWithPreviousInputs(
      getEvaluatedExpressionSelector,
      fieldLabel,
      fieldParentTreeName + fieldElement.name
    );

    const constraintLabel = getConstraintLabelText(
      fieldElement,
      defaultLanguage
    );
    const modifiedConstraintLabel = customizeLabelsWithPreviousInputs(
      getEvaluatedExpressionSelector,
      constraintLabel,
      fieldParentTreeName + fieldElement.name
    );

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

      const isError = isPresentInErrorSelector(
        fieldParentTreeName + fieldElement.name
      );

      if (fieldElement.bind && fieldElement.bind.calculate) {
        let calculatedValue: any = '';
        calculatedValue = this.props.getEvaluatedExpressionSelector(
          fieldElement.bind.calculate,
          fieldParentTreeName + fieldElement.name
        );

        if (fieldValue && calculatedValue !== fieldValue) {
          this.props.assignFieldValueActionCreator(
            fieldParentTreeName + fieldElement.name,
            calculatedValue
          );
        }

        return (
          <FormGroup>
            <Label>
              {modifiedFieldLabel}{' '}
              {isRequired && (
                <span className="requiredTextSteric">{REQUIRED_SYMBOL}</span>
              )}
            </Label>
            <Input
              type="text"
              name={fieldElement.name}
              onChange={this.onChangeHandler}
              onBlur={this.onBlurHandler}
              value={
                this.state.isFocused
                  ? this.state.fieldValue || ''
                  : calculatedValue || ''
              }
              readOnly={isReadonly}
            />
            {getFormSubmitStatusSelector && isError && (
              <FontAwesomeIcon
                icon="exclamation-circle"
                className="errorSign"
              />
            )}
            {fieldElement.hint && (
              <Label className="hintText">{hintLabel}</Label>
            )}
            {isRequiredViolated && (
              <Label className="requiredText">{REQUIRED_FIELD_MSG}</Label>
            )}
            {isConstraintViolated && (
              <Label className="constraintText">
                {modifiedConstraintLabel}
              </Label>
            )}
          </FormGroup>
        );
      } else {
        return (
          <FormGroup>
            <Label>
              {modifiedFieldLabel}{' '}
              {isRequired && (
                <span className="requiredTextSteric">{REQUIRED_SYMBOL}</span>
              )}
            </Label>
            <Input
              type="text"
              name={fieldElement.name}
              onChange={this.onChangeHandler}
              onBlur={this.onBlurHandler}
              value={
                this.state.isFocused
                  ? this.state.fieldValue || ''
                  : fieldValue || ''
              }
              readOnly={isReadonly}
            />
            {getFormSubmitStatusSelector && isError && (
              <FontAwesomeIcon
                icon="exclamation-circle"
                className="errorSign"
              />
            )}
            {fieldElement.hint && (
              <Label className="hintText">{hintLabel}</Label>
            )}
            {isRequiredViolated && (
              <Label className="requiredText">{REQUIRED_FIELD_MSG}</Label>
            )}
            {isConstraintViolated && (
              <Label className="constraintText">
                {modifiedConstraintLabel}
              </Label>
            )}
          </FormGroup>
        );
      }
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
      event.currentTarget.value || ''
    );
  };
}

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  fieldValue: string;
  getEvaluatedExpressionSelector: any;
  getFormSubmitStatusSelector: any;
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

/** connect Text component to the redux store */
const ConnectedText = connect(
  mapStateToProps,
  mapDispatchToProps
)(Text);

export default ConnectedText;
