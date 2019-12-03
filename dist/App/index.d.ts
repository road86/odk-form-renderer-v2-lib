import * as React from 'react';
import { setUserInputObj } from '../store/ducks/formState';
export interface AppProps {
    csvList: any;
    isNoErrors: any;
    userInputObj: any;
    userInputJson: any;
    defaultLanguage: string;
    formTitle: string;
    fieldElements: any;
    setUserInputAction: typeof setUserInputObj;
    handleSubmit(userInput: any): any;
}
declare class App extends React.Component<AppProps> {
    componentDidMount(): void;
    render(): JSX.Element;
    private handleClick;
}
/** connect Decimal component to the redux store */
declare const ConnectedApp: import("react-redux").ConnectedComponent<typeof App, Pick<AppProps, "userInputJson" | "csvList" | "defaultLanguage" | "formTitle" | "fieldElements" | "handleSubmit">>;
export default ConnectedApp;
