import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

export interface OdkFormRendererProps {
  defaultLanguage: string;
  formDefinitionJson: any;
}

class OdkFormRenderer extends React.Component<OdkFormRendererProps> {
  public render() {
    const { defaultLanguage, formDefinitionJson } = this.props;
    const props = {
      defaultLanguage,
      fieldElements: formDefinitionJson.children,
    };
    return (
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
  }
}

export default OdkFormRenderer;
