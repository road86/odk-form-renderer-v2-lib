import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { connect } from 'react-redux';
import {FormGroup, Label} from 'reactstrap';
import DatePicker from 'react-datepicker';
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

/** props interface for the KbDate component */
export interface DateProps {
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

class KbDate extends React.Component<DateProps> {
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
    const isFormSubmitted: boolean = getFormSubmitStatusSelector;
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

      let defaultValue: any = null;
      if (fieldValue && fieldValue !== '') {
        defaultValue = new Date(fieldValue);
      }


      let calculatedValue: any = null;
      if (fieldElement.bind && fieldElement.bind.calculate) {
        calculatedValue = this.props.getEvaluatedExpressionSelector(
          fieldElement.bind.calculate,
          fieldParentTreeName + fieldElement.name
        );
      }

      if ((fieldValue === undefined || fieldValue == '') && calculatedValue) {
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          calculatedValue
        );
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
          <DatePicker
            className="react-custom-datepicker"
            dateFormat="dd/MM/yyyy"
            name={fieldElement.name}
            selected={defaultValue}
            onChange={(e: any) => this.onChangeHandler(e)}
            readOnly={isReadonly}
            placeholderText="dd/mm/yyyy"
            popperPlacement="top"
            popperModifiers={[
              {
                name: "offset",
                options: {
                  offset: [5, 10],
                },
              },
              {
                name: "preventOverflow",
                options: {
                  rootBoundary: "viewport",
                  tether: false,
                  altAxis: true,
                },
              },
            ] as any}
          />
          {isFormSubmitted && isError && (
            <FontAwesomeIcon icon="exclamation-circle" className="errorSign" />
          )}
          {fieldElement.hint && <Label className="hintText">{hintLabel}</Label>}
          {isFormSubmitted && isRequiredViolated && (
            <Label className="requiredText">{REQUIRED_FIELD_MSG}</Label>
          )}
          {isConstraintViolated && (
            <Label className="constraintText">{modifiedConstraintLabel}</Label>
          )}
        </FormGroup>
      );
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

  /** sets the value of field element in store
   * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
   */
  private onChangeHandler = (event: any) => {
    this.props.assignFieldValueActionCreator(
      this.props.fieldParentTreeName + this.props.fieldElement.name,
      event !== ''
        ? new Date(event)
        : null
    );
  };
}

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  fieldValue: any;
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

/** connect KbDate component to the redux store */
const ConnectedDate = connect(
  mapStateToProps,
  mapDispatchToProps
)(KbDate);

export default ConnectedDate;
