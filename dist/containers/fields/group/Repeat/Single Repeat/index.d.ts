import React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../../components/typeEvalutors/Base';
export interface SingleRepeatProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    fieldValue: any;
    defaultLanguage: string;
    repeatIndex: number;
    assignmentHandler: any;
    removeHandler: any;
}
declare class SingleRepeat extends React.Component<SingleRepeatProps> {
    render(): JSX.Element;
    private handleChange;
}
export default SingleRepeat;
