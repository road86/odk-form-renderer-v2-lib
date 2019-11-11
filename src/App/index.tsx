import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import GroupTypeEvaluator from '../components/typeEvalutors/Group';
import { DEMO_FORM_JSON } from '../constants';

library.add(faPlusCircle, faMinusCircle);

class App extends React.Component {
  public render() {
    const props = {
      defaultLanguage: 'English',
      fieldElements: DEMO_FORM_JSON.children,
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
