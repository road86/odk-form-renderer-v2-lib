import * as React from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { Store } from 'redux';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../components/typeEvalutors/Base';

import {
  addErrorInputId,
  assignFieldValueAction,
  getEvaluatedExpression,
  getFieldValue,
  isPresentInError,
  removeErrorInputId,
} from '../../../../store/ducks/formState';
import {
  isInputRequired,
  shouldComponentBeReadOnly,
  shouldComponentBeRelevant,
  shouldInputViolatesConstraint,
} from '../../../../utils/helpers';

/** props interface for the calculate component */
export interface CalculateProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  fieldValue: any;
  assignFieldValueActionCreator: typeof assignFieldValueAction;
  getEvaluatedExpressionSelector: any;
  isComponentRender: boolean;
  isPresentInErrorSelector: any;
  addErrorInputIdActionCreator: typeof addErrorInputId;
  removeErrorInputIdActionCreator: typeof removeErrorInputId;
  defaultLanguage: string;
}

class Calculate extends React.Component<CalculateProps> {
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
      let calculatedValue: any = '';
      if (fieldElement.bind && fieldElement.bind.calculate) {
        calculatedValue = this.props.getEvaluatedExpressionSelector(
          fieldElement.bind.calculate,
          fieldParentTreeName + fieldElement.name
        );
      }

      if (calculatedValue && fieldValue !== calculatedValue) {
        this.props.assignFieldValueActionCreator(
          fieldParentTreeName + fieldElement.name,
          calculatedValue
        );
      }

      return (
        <div>
          <Input
            type="hidden"
            name={fieldElement.name}
            value={calculatedValue || ''}
            readOnly={isReadonly}
          />
        </div>
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
  const result = {
    fieldValue: getFieldValue(state, fieldParentTreeName + fieldElement.name),
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

/** connect Calculate component to the redux store */
const ConnectedCalculate = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculate);

export default ConnectedCalculate;
