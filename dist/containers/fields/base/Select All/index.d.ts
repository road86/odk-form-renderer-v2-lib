import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../components/typeEvalutors/Base';
/** props interface for the SelectOne component */
export interface SelectAllProps {
    choices: any;
    csvList: any;
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    defaultLanguage: string;
}
declare class SelectAll extends React.Component<SelectAllProps> {
    render(): JSX.Element;
}
export default SelectAll;
