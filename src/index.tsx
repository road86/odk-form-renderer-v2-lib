import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

export interface OdkFormRendererProps {
  defaultLanguage: string;
  formDefinitionJson: any;
  handleSubmit(userInput: any): any;
}

class OdkFormRenderer extends React.Component<OdkFormRendererProps> {
  public render() {
    const { defaultLanguage, formDefinitionJson, handleSubmit } = this.props;
    const props = {
      defaultLanguage,
      fieldElements: formDefinitionJson.children,
      handleSubmit,
    };
    return (
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
  }
}

export default OdkFormRenderer;
