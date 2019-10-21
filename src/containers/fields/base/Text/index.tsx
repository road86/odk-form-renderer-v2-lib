import * as React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Input } from 'reactstrap';
import { Store } from 'redux';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../components/typeEvalutors/Base';
import {
  assignFieldValueAction,
  getEvaluatedExpression,
  getFieldValue,
} from '../../../../store/ducks/formState';

/** props interface for the text component */
export interface TextProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  fieldValue: string;
  assignFieldValueActionCreator: typeof assignFieldValueAction;
  getEvaluatedExpressionSelector: any;
}

class Text extends React.Component<TextProps> {
  public render() {
    const {
      fieldElement,
      fieldParentTreeName,
      fieldValue,
      getEvaluatedExpressionSelector,
    } = this.props;
    let isComponentRender = true;
    if (fieldElement && fieldElement.bind && fieldElement.bind.relevant) {
      isComponentRender = getEvaluatedExpressionSelector(
        fieldElement.bind.relevant,
        fieldParentTreeName + fieldElement.name
      );
    }
    if (isComponentRender) {
      return (
        <FormGroup>
          <Input
            type="text"
            name={fieldElement.name}
            onChange={this.onChangeHandler}
            value={fieldValue}
          />
        </FormGroup>
      );
    } else {
      return null;
    }
  }

  /** sets the value of field element in store
   * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
   */
  private onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.assignFieldValueActionCreator(
      event.currentTarget.name,
      event.currentTarget.value
    );
  };
}

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  fieldValue: string;
  getEvaluatedExpressionSelector: any;
}

/** Interface to describe props from parent */
interface ParentProps {
  fieldElement: FieldElement;
}

/** Map props to state  */
const mapStateToProps = (
  state: Partial<Store>,
  parentProps: ParentProps
): DispatchedStateProps => {
  const { fieldElement } = parentProps;
  const result = {
    fieldValue: getFieldValue(state, fieldElement.name) || '',
    getEvaluatedExpressionSelector: (
      expression: string,
      fieldTreeName: string
    ) => getEvaluatedExpression(state, expression, fieldTreeName),
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
