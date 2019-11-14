import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import GroupTypeEvaluator from '../components/typeEvalutors/Group';

library.add(faPlusCircle, faMinusCircle);

export interface AppProps {
  defaultLanguage: string;
  fieldElements: any;
}

class App extends React.Component<AppProps> {
  public render() {
    const { defaultLanguage, fieldElements } = this.props;
    const props = {
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
      </Container>
    );
  }
}

export default App;
