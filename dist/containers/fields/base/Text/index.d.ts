import * as React from 'react';
import { FieldElement } from '../../../../components/typeEvalutors/Base';
import { assignFieldValueAction } from '../../../../store/ducks/formState';
/** props interface for the text component */
export interface TextProps {
    fieldElement: FieldElement;
    fieldValue: string;
    assignFieldValueActionCreator: typeof assignFieldValueAction;
}
declare class Text extends React.Component<TextProps> {
    render(): JSX.Element;
    /** sets the value of field element in store
     * @param {React.FormEvent<HTMLInputElement>} event - the onchange input event
     */
    private onChangeHandler;
}
/** Interface to describe props from parent */
interface ParentProps {
    fieldElement: FieldElement;
}
/** connect Text component to the redux store */
declare const ConnectedText: import("react-redux").ConnectedComponent<typeof Text, Pick<TextProps, "fieldElement"> & ParentProps>;
export default ConnectedText;
