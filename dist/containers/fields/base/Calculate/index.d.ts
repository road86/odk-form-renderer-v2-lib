import * as React from 'react';
import { FieldElement, FieldParentTreeName } from '../../../../components/typeEvalutors/Base';
import { addErrorInputId, assignFieldValueAction, removeErrorInputId } from '../../../../store/ducks/formState';
/** props interface for the calculate component */
export interface CalculateProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
    fieldValue: any;
    assignFieldValueActionCreator: typeof assignFieldValueAction;
    getEvaluatedExpressionSelector: any;
    isComponentRender: boolean;
    isPresentInErrorSelector: any;
    addErrorInputIdActionCreator: typeof addErrorInputId;
    removeErrorInputIdActionCreator: typeof removeErrorInputId;
    defaultLanguage: string;
}
declare class Calculate extends React.Component<CalculateProps> {
    render(): JSX.Element | null;
}
/** Interface to describe props from parent */
interface ParentProps {
    fieldElement: FieldElement;
    fieldParentTreeName: FieldParentTreeName;
}
/** connect Calculate component to the redux store */
declare const ConnectedCalculate: import("react-redux").ConnectedComponent<typeof Calculate, Pick<CalculateProps, "fieldElement" | "fieldParentTreeName" | "defaultLanguage"> & ParentProps>;
export default ConnectedCalculate;
