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
  assignMediaListAction,
  getUserInputFromStore,
  isErrorsArrayEmpty,
  resetStoreAction,
  setFormSubmitStatus,
  setUserInputObj,
} from '../store/ducks/formState';

library.add(faPlusCircle, faMinusCircle, faExclamationCircle);

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
  setFormSubmitStatusAction: typeof setFormSubmitStatus;
  resetStoreActionCreator: typeof resetStoreAction;
  handleSubmit(userInput: any): any;
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
    const { userInputJson, userInputObj } = this.props;
    this.props.resetStoreActionCreator();
    if (userInputJson && userInputJson !== userInputObj) {
      this.props.setUserInputAction(userInputJson);
    }
    this.setState({
      defaultLanguage: this.props.defaultLanguage,
      isSubmissionError: false,
    });
  }

  public handleSelect = (languageName: string) => {
    this.setState({ defaultLanguage: languageName });
  };

  public render() {
    const {
      csvList,
      fieldElements,
      formTitle,
      languageOptions,
      choices,
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
        <Row className={'form-title formTitle'}>
          <Col>
            <h3 className="headerText">{formTitle}</h3>
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
        <Row className="formFieldBody">
          <Col>
            <GroupTypeEvaluator {...props} />
            <Row className="welcome-box">
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
    const { handleSubmit, isNoErrors, userInputObj } = this.props;
    if (isNoErrors) {
      handleSubmit(userInputObj);
    } else {
      handleSubmit('Field Violated');
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
}

/** Map props to state  */
const mapStateToProps = (state: Partial<Store>): DispatchedStateProps => {
  const result = {
    isNoErrors: isErrorsArrayEmpty(state),
    userInputObj: getUserInputFromStore(state),
  };
  return result;
};

/** map props to actions */
const mapDispatchToProps = {
  assignMediaListActionCreator: assignMediaListAction,
  resetStoreActionCreator: resetStoreAction,
  setFormSubmitStatusAction: setFormSubmitStatus,
  setUserInputAction: setUserInputObj,
};

/** connect Decimal component to the redux store */
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
