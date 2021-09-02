import React from 'react';
interface FilePreviewProps {
    fieldName: string;
    fieldValue: any;
    fileObject: any;
    assignFieldValueActionCreator: any;
}
declare class FilePreview extends React.Component<FilePreviewProps> {
    render(): JSX.Element;
}
/** Interface to describe props from parent */
interface ParentProps {
    fieldName: string;
    fieldValue: any;
}
/** connect FilePreview component to the redux store */
declare const ConnectedFilePreview: import("react-redux").ConnectedComponent<typeof FilePreview, Pick<FilePreviewProps, "fieldName" | "fieldValue"> & ParentProps>;
export default ConnectedFilePreview;
