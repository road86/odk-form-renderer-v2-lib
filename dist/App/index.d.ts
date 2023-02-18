import * as React from 'react';
import { resetStoreAction, setCSVObj, setFormSubmitStatus, setUserInputObj, setUserLanguage, setColorAction, assignFieldValueAction } from '../store/ducks/formState';
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
    setThemeColor: typeof setColorAction;
    setUserLanguageAction: typeof setUserLanguage;
    languageOptions: any;
    setFormSubmitStatusAction: typeof setFormSubmitStatus;
    resetStoreActionCreator: typeof resetStoreAction;
    mediaList: any;
    handleSubmit(userInput: any, mediaList: any): any;
    themeColor: string;
    assignFieldValueActionCreator: typeof assignFieldValueAction;
}
export interface AppState {
    defaultLanguage: string;
    isSubmissionError: boolean;
}
declare class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleSelect: (languageName: string) => void;
    render(): JSX.Element;
    private handleClick;
    private toggleStateValue;
}
/** connect Decimal component to the redux store */
declare const ConnectedApp: import("react-redux").ConnectedComponent<typeof App, Pick<AppProps, "userInputJson" | "choices" | "csvList" | "defaultLanguage" | "formTitle" | "fieldElements" | "languageOptions" | "handleSubmit" | "themeColor">>;
export default ConnectedApp;
