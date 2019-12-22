import * as React from 'react';
import { shouldComponentBeMinimal } from '../../../../../src/utils/helpers';
import {
  FieldElement,
  FieldParentTreeName,
} from '../../../../components/typeEvalutors/Base';
import Dropdown from './Dropdown';
import Radio from './Radio';

/** props interface for the SelectOne component */
export interface SelectAllProps {
  choices: any;
  csvList: any;
  fieldElement: FieldElement;
  fieldParentTreeName: FieldParentTreeName;
  defaultLanguage: string;
}

class SelectAll extends React.Component<SelectAllProps> {
  public render() {
    const { fieldElement } = this.props;
    if (shouldComponentBeMinimal(fieldElement)) {
      return <Dropdown {...this.props} />;
    }
    return <Radio {...this.props} />;
  }
}

export default SelectAll;
