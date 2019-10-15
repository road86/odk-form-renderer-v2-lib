import * as React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Input } from 'reactstrap';
import { Store } from 'redux';
import { FieldElement } from '../../../../components/typeEvalutors/Base';
import {
  assignFieldValueAction,
  getFieldValue,
} from '../../../../store/ducks/formState';

/** props interface for the text component */
export interface TextProps {
  fieldElement: FieldElement;
  fieldValue: string;
  assignFieldValueActionCreator: typeof assignFieldValueAction;
}

class Text extends React.Component<TextProps> {
  public render() {
    const { fieldElement, fieldValue } = this.props;
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
