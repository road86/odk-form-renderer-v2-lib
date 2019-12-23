import * as React from 'react';
import { setUserInputObj } from '../store/ducks/formState';
export interface AppProps {
    choices: any;
    csvList: any;
    isNoErrors: any;
    userInputObj: any;
    userInputJson: any;
    defaultLanguage: string;
    formTitle: string;
    fieldElements: any;
    setUserInputAction: typeof setUserInputObj;
    languageOptions: any;
    handleSubmit(userInput: any): any;
}
export interface AppState {
    defaultLanguage: string;
    isSubmissionError: boolean;
}
declare class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps);
    componentDidMount(): void;
    handleSelect: (languageName: string) => void;
    render(): JSX.Element;
    private handleClick;
    private toggleStateValue;
}
/** connect Decimal component to the redux store */
declare const ConnectedApp: import("react-redux").ConnectedComponent<typeof App, Pick<AppProps, "choices" | "csvList" | "userInputJson" | "defaultLanguage" | "formTitle" | "fieldElements" | "languageOptions" | "handleSubmit">>;
export default ConnectedApp;
