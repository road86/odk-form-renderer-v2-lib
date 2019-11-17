import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../components/typeEvalutors/Base';
/** props interface for the SelectOne component */
export interface SelectOneProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    defaultLanguage: string;
}
declare class SelectOne extends React.Component<SelectOneProps> {
    render(): JSX.Element;
}
export default SelectOne;
