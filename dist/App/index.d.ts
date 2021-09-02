import * as React from 'react';
import { resetStoreAction, setCSVObj, setFormSubmitStatus, setUserInputObj, setUserLanguage } from '../store/ducks/formState';
export interface AppProps {
    choices: any;
    csvList: any;
    csvObj: any;
    isNoErrors: any;
    userInputObj: any;
    userInputJson: any;
    defaultLanguage: string;
    formTitle: string;
    fieldElements: any;
    setUserInputAction: typeof setUserInputObj;
    setCSVAction: typeof setCSVObj;
    setUserLanguageAction: typeof setUserLanguage;
    languageOptions: any;
    setFormSubmitStatusAction: typeof setFormSubmitStatus;
    resetStoreActionCreator: typeof resetStoreAction;
    mediaList: any;
    handleSubmit(userInput: any, mediaList: any): any;
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
