import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, Row } from 'reactstrap';
import { Store } from 'redux';
import GroupTypeEvaluator from '../components/typeEvalutors/Group';
import {
  getUserInputFromStore,
  isErrorsArrayEmpty,
} from '../store/ducks/formState';

library.add(faPlusCircle, faMinusCircle);

export interface AppProps {
  isNoErrors: any;
  userInputObj: any;
  defaultLanguage: string;
  fieldElements: any;
  csvList: any;
  handleSubmit(userInput: any): any;
}

class App extends React.Component<AppProps> {
  public render() {
    const { csvList, defaultLanguage, fieldElements } = this.props;
    const props = {
      csvList,
      defaultLanguage,
      fieldElements,
      fieldParentTreeName: '',
    };
    return (
      <Container className="form-container">
        <Row className="welcome-box">
          <Col>
            <h3>Welcome to Odk Form Renderer</h3>
          </Col>
        </Row>
        <GroupTypeEvaluator {...props} />
        <Row className="welcome-box">
          <Col>
            <Button className="btn btn-success" onClick={this.handleClick}>
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  // tslint:disable-next-line: variable-name
  private handleClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    const { handleSubmit, isNoErrors, userInputObj } = this.props;
    handleSubmit('submitted');
    if (isNoErrors) {
      handleSubmit(userInputObj);
    }
    handleSubmit('Field Violated');
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

/** connect Decimal component to the redux store */
const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
