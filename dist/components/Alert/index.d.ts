import * as React from 'react';
export interface KbAlertProps {
    headerText: string;
    bodyText: string;
    handleToggle: any;
    isOpen: boolean;
    color: string;
}
declare class KbAlert extends React.Component<KbAlertProps> {
    render(): JSX.Element;
}
export default KbAlert;
