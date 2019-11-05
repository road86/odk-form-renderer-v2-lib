import * as React from 'react';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../components/typeEvalutors/Base';
import Dropdown from './Dropdown';
import Radio from './Radio';

/** props interface for the SelectOne component */
export interface SelectAllProps {
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  defaultLanguage: string;
}

class SelectAll extends React.Component<SelectAllProps> {
  public render() {
    const { fieldElement } = this.props;
    let isMinimal = false;
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

export default SelectAll;
