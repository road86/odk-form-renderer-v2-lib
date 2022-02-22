import React from 'react';
interface AudioPreviewProps {
    fieldName: string;
    fieldValue: any;
    fileObject: any;
    assignFieldValueActionCreator: any;
}
declare class AudioPreview extends React.Component<AudioPreviewProps> {
    render(): JSX.Element;
}
/** Interface to describe props from parent */
interface ParentProps {
    fieldName: string;
    fieldValue: any;
}
/** connect AudioPreview component to the redux store */
declare const ConnectedAudioPreview: import("react-redux").ConnectedComponent<typeof AudioPreview, Pick<AudioPreviewProps, "fieldName" | "fieldValue"> & ParentProps>;
export default ConnectedAudioPreview;
