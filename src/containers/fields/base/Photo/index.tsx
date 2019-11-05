import * as React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Input, Label } from 'reactstrap';
import { Store } from 'redux';
import { FieldElement } from '../../../../components/typeEvalutors/Base';
import { REQUIRED_FIELD_MSG, REQUIRED_SYMBOL } from '../../../../constants';
import {
  assignFieldValueAction,
  getFieldValue,
} from '../../../../store/ducks/formState';
import { getFieldLabelText, isInputRequired } from '../../../../utils/helpers';

/** props interface for the photo component */
export interface PhotoProps {
  fieldElement: FieldElement;
  fieldValue: string;
  assignFieldValueActionCreator: typeof assignFieldValueAction;
  defaultLanguage: string;
}

class Photo extends React.Component<PhotoProps> {
  public render() {
    const { fieldElement, fieldValue, defaultLanguage } = this.props;
    const isRequired = isInputRequired(fieldElement);
    const fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    return (
      <FormGroup>
        <Label>{fieldLabel}</Label>
        {isRequired && <Label>{REQUIRED_SYMBOL}</Label>}
        <Input
          type="file"
          accept="image/*"
          name={fieldElement.name}
          onChange={this.onChangeHandler}
          value={fieldValue}
        />
        {isRequired && <Label>{REQUIRED_FIELD_MSG}</Label>}
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
    fieldValue: getFieldValue(state, fieldElement.name),
  };
  return result;
};

/** map props to actions */
const mapDispatchToProps = {
  assignFieldValueActionCreator: assignFieldValueAction,
};

/** connect Photo component to the redux store */
const ConnectedPhoto = connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);

export default ConnectedPhoto;
