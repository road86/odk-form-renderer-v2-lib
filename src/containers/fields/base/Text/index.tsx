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
  assignFieldValueAction,
  getEvaluatedExpression,
  getFieldValue,
} from '../../../../store/ducks/formState';
import {
  getConstraintLabelText,
  getFieldLabelText,
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
  isComponentRender: boolean;
}

class Text extends React.Component<TextProps> {
  public render() {
    const {
      fieldElement,
      fieldParentTreeName,
      fieldValue,
      isComponentRender,
      getEvaluatedExpressionSelector,
    } = this.props;
    const isRequired = isInputRequired(fieldElement);
    const isConstraintViolated =
      fieldValue &&
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
      return (
        <FormGroup>
          <Label>{fieldLabel}</Label>
          {isRequired && <Label>{REQUIRED_SYMBOL}</Label>}
          <Input
            type="text"
            name={fieldElement.name}
            onChange={this.onChangeHandler}
            value={fieldValue || ''}
            readOnly={isReadonly}
          />
          {isRequired && <Label>{REQUIRED_FIELD_MSG}</Label>}
          {isConstraintViolated && <Label>{constraintLabel}</Label>}
        </FormGroup>
      );
    } else {
      if (fieldValue != null) {
        this.props.assignFieldValueActionCreator(fieldElement.name, null);
      }
      return null;
    }
  }

  /** sets the value of field element in store
   * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
   */
  private onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.assignFieldValueActionCreator(
      event.currentTarget.name,
      event.currentTarget.value || ''
    );
  };
}

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  fieldValue: string;
  getEvaluatedExpressionSelector: any;
  isComponentRender: boolean;
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
  const result = {
    fieldValue: getFieldValue(state, fieldElement.name),
    getEvaluatedExpressionSelector,
    isComponentRender: shouldComponentBeRelevant(
      fieldElement,
      fieldParentTreeName,
      getEvaluatedExpressionSelector
    ),
  };
  return result;
};

/** map props to actions */
const mapDispatchToProps = {
  assignFieldValueActionCreator: assignFieldValueAction,
};

/** connect Text component to the redux store */
const ConnectedText = connect(
  mapStateToProps,
  mapDispatchToProps
)(Text);

export default ConnectedText;
