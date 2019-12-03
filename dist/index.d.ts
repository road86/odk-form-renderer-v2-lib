import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
export interface OdkFormRendererProps {
    defaultLanguage: string;
    formDefinitionJson: any;
    userInputJson: any;
    handleSubmit(userInput: any): any;
}
declare class OdkFormRenderer extends React.Component<OdkFormRendererProps> {
    render(): JSX.Element;
}
export default OdkFormRenderer;
