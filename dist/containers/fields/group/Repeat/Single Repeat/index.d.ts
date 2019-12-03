import React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../../components/typeEvalutors/Base';
export interface SingleRepeatProps {
    csvList: any;
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    fieldValue: any;
    defaultLanguage: string;
    repeatIndex: number;
    assignmentHandler: any;
    removeHandler: any;
    removeOptionHandler: any;
}
declare class SingleRepeat extends React.Component<SingleRepeatProps> {
    render(): JSX.Element;
    private handleChange;
}
export default SingleRepeat;
