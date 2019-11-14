import * as React from 'react';
import { FieldElement } from '../../../../components/typeEvalutors/Base';
import { assignFieldValueAction } from '../../../../store/ducks/formState';
/** props interface for the photo component */
export interface PhotoProps {
    fieldElement: FieldElement;
    fieldValue: string;
    assignFieldValueActionCreator: typeof assignFieldValueAction;
    defaultLanguage: string;
}
declare class Photo extends React.Component<PhotoProps> {
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
/** connect Photo component to the redux store */
declare const ConnectedPhoto: import("react-redux").ConnectedComponent<typeof Photo, Pick<PhotoProps, "fieldElement" | "defaultLanguage"> & ParentProps>;
export default ConnectedPhoto;
