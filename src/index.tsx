import { MuiThemeProvider } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Provider } from 'react-redux';
import { theme } from './utils/Theme';
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
      themeColor: formDefinitionJson.theme_color,
    };
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <App {...props} />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default OdkFormRenderer;
