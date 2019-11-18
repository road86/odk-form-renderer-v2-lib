import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Provider } from 'react-redux';
import { geo } from '../src/constants';
import App from './App';
import store from './store';

export interface OdkFormRendererProps {
  defaultLanguage: string;
  formDefinitionJson: any;
  userInputJson: any;
  handleSubmit(userInput: any): any;
}

class OdkFormRenderer extends React.Component<OdkFormRendererProps> {
  public render() {
    const {
      defaultLanguage,
      formDefinitionJson,
      userInputJson,
      handleSubmit,
    } = this.props;
    const props = {
      csvList: geo,
      defaultLanguage,
      fieldElements: formDefinitionJson.children,
      formTitle: formDefinitionJson.title,
      handleSubmit,
      userInputJson,
    };
    return (
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
  }
}

export default OdkFormRenderer;
