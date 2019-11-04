import * as React from 'react';
import { FormGroup, FormText, Label } from 'reactstrap';
import { FieldElement } from '../../../../components/typeEvalutors/Base';
import { getFieldHintText, getFieldLabelText } from '../../../../utils/helpers';

export interface NoteProps {
  fieldElement: FieldElement;
  fieldParentTreeName: string;
  defaultLanguage: string;
}

class Note extends React.Component<NoteProps> {
  public render() {
    const { fieldElement, defaultLanguage } = this.props;
    const fieldLabel = getFieldLabelText(fieldElement, defaultLanguage);
    const fieldHint = getFieldHintText(fieldElement, defaultLanguage);
    return (
      <FormGroup>
        <Label>{fieldLabel}</Label>
        <FormText>{fieldHint}</FormText>
      </FormGroup>
    );
  }
}

export default Note;
