import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faExclamationCircle,
  faMinusCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, Row } from 'reactstrap';
import { Store } from 'redux';
import KbAlert from '../components/Alert';
import DropDown from '../components/DropDown';
import GroupTypeEvaluator from '../components/typeEvalutors/Group';
import {
  getAllFileObjects,
  getCSVFromStore,
  getUserInputFromStore,
  isErrorsArrayEmpty,
  resetStoreAction,
  setCSVObj,
  setFormSubmitStatus,
  setUserInputObj,
  setUserLanguage,
  setColorAction,
  assignFieldValueAction,
} from '../store/ducks/formState';

library.add(faPlusCircle, faMinusCircle, faExclamationCircle);

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

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }

  public componentDidMount() {
    const { userInputJson, userInputObj, csvList, csvObj } = this.props;
    /** assigning the start date by default */
    const _start = userInputJson.start;
    this.props.assignFieldValueActionCreator('start', _start ? _start : new Date());

    this.props.resetStoreActionCreator();
    this.props.setThemeColor(this.props.themeColor);
    if (userInputJson && userInputJson !== userInputObj) {
      this.props.setUserInputAction(userInputJson);
    }
    if (csvList && csvList !== csvObj) {
      this.props.setCSVAction(csvList);
    }

    this.props.setUserLanguageAction(this.props.defaultLanguage);
    this.setState({
      defaultLanguage: this.props.defaultLanguage,
      isSubmissionError: false,
    });
  }

  public componentWillUnmount() {
    /** assigning the end date by default */
    const _end: any = this.props.userInputJson.end;
    this.props.assignFieldValueActionCreator('end', _end ? _end : new Date());
  }

  public handleSelect = (languageName: string) => {
    this.setState({ defaultLanguage: languageName });
    this.props.setUserLanguageAction(this.props.defaultLanguage);
  };

  public render() {
    const {
      csvList,
      fieldElements,
      formTitle,
      languageOptions,
      choices,
      themeColor,
    } = this.props;
    const { defaultLanguage } = this.state || this.props;

    const props = {
      choices,
      csvList,
      defaultLanguage,
      fieldElements,
      fieldParentTreeName: '',
      isAppearanceApplicable: false,
      languageOptions,
    };

    return (
      <Container className="form-container">
        <Row className="formTitle" style={{ borderBottom: `3px solid ${themeColor}`, borderTop: `3px solid ${themeColor}` }}>
          <Col>
            <h3 className="headerText" style={{ color: `${themeColor || '#649a6a'} ` }}>{formTitle}</h3>
          </Col>
          <DropDown
            languages={...languageOptions}
            onChangeSelect={this.handleSelect}
            defaultLanguage={defaultLanguage}
          />
        </Row>
        {this.state && this.state.isSubmissionError && (
          <KbAlert
            color={'danger'}
            isOpen={this.state.isSubmissionError}
            handleToggle={this.toggleStateValue}
            headerText={'Oh snap! You got an error!'}
            bodyText={
              'Please make sure the required fields are not missing and there are no errors'
            }
          />
        )}
        <Row>
          <Col style={{ padding: 0, paddingBottom: 250 }}>
            <GroupTypeEvaluator {...props} />
            <Row className="welcome-box" style={{ padding: 10 }}>
              <Col>
                <Button className="btn btn-success" onClick={this.handleClick}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  // tslint:disable-next-line: variable-name
  private handleClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    const { handleSubmit, isNoErrors, userInputObj, mediaList } = this.props;
    if (isNoErrors) {
      this.setState({ isSubmissionError: false });
      handleSubmit(userInputObj, mediaList);
    } else {
      handleSubmit('Field Violated', mediaList);
      this.setState({ isSubmissionError: true });
      this.props.setFormSubmitStatusAction(true);
      window.scrollTo(0, 0);
    }
  };

  private toggleStateValue = () => {
    this.setState({ isSubmissionError: false });
  };
}

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  isNoErrors: any;
  userInputObj: any;
  mediaList: any;
  csvObj: any;
}

/** Map props to state  */
const mapStateToProps = (state: Partial<Store>): DispatchedStateProps => {
  const result = {
    isNoErrors: isErrorsArrayEmpty(state),
    mediaList: getAllFileObjects(state),
    userInputObj: getUserInputFromStore(state),
    csvObj: getCSVFromStore(state),
  };
  return result;
};

/** map props to actions */
const mapDispatchToProps = {
  resetStoreActionCreator: resetStoreAction,
  setFormSubmitStatusAction: setFormSubmitStatus,
  setUserInputAction: setUserInputObj,
  setUserLanguageAction: setUserLanguage,
  setCSVAction: setCSVObj,
  setThemeColor: setColorAction,
  assignFieldValueActionCreator: assignFieldValueAction,
};

/** connect Decimal component to the redux store */
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
