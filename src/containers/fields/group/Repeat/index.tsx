import * as React from 'react';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../components/typeEvalutors/Base';
import ControlledRepeat from './Controlled Repeat';
import UncontrolledRepeat from './Uncontrolled Repeat';

/** props interface for the Repeat component */
export interface RepeatProps {
  choices: any;
  csvList: any;
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  defaultLanguage: string;
}

class Repeat extends React.Component<RepeatProps> {
  public render() {
    const { fieldElement } = this.props;
    if (fieldElement.control && fieldElement.control['jr:count']) {
      return <UncontrolledRepeat {...this.props} />;
    }
    return <ControlledRepeat {...this.props} />;
  }
}

export default Repeat;
