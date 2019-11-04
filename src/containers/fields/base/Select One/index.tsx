import * as React from 'react';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../components/typeEvalutors/Base';
import Dropdown from './Dropdown';
import Radio from './Radio';

/** props interface for the SelectOne component */
export interface SelectOneProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  defaultLanguage: string;
}

class SelectOne extends React.Component<SelectOneProps> {
  public render() {
    const { fieldElement } = this.props;
    let isMinimal = false;
    // make a shouldMinimal Function
    if (fieldElement.control && fieldElement.control.appearance) {
      fieldElement.control.appearance === 'minimal'
        ? (isMinimal = true)
        : (isMinimal = false);
    }
    if (isMinimal) {
      return <Dropdown {...this.props} />;
    }
    return <Radio {...this.props} />;
  }
}

export default SelectOne;
