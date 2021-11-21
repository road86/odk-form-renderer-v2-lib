import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
export interface OdkFormRendererProps {
    csvList: any;
    defaultLanguage: string;
    formDefinitionJson: any;
    languageOptions: any;
    userInputJson: any;
    handleSubmit: (userInput: any, mediaList: any) => any;
}
declare class OdkFormRenderer extends React.Component<OdkFormRendererProps> {
    render(): JSX.Element;
}
export default OdkFormRenderer;
