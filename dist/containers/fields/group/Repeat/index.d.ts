import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../components/typeEvalutors/Base';
/** props interface for the Repeat component */
export interface RepeatProps {
    choices: any;
    csvList: any;
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    defaultLanguage: string;
}
declare class Repeat extends React.Component<RepeatProps> {
    render(): JSX.Element;
}
export default Repeat;
