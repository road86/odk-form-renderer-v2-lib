import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

export interface OdkFormRendererProps {
  csvList: any;
  defaultLanguage: string;
  formDefinitionJson: any;
  languageOptions: any;
  userInputJson: any;
  handleSubmit: (userInput: any, mediaList: any) => any;
}

class OdkFormRenderer extends React.Component<OdkFormRendererProps> {
  public render() {
    const {
      csvList,
      defaultLanguage,
      formDefinitionJson,
      userInputJson,
      languageOptions,
      handleSubmit,
    } = this.props;
    const props = {
      choices: formDefinitionJson.choices || {},
      csvList,
      defaultLanguage,
      fieldElements: formDefinitionJson.children,
      formTitle: formDefinitionJson.title,
      handleSubmit,
      languageOptions,
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
