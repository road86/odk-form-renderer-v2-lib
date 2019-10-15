import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

class OdkFormRenderer extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default OdkFormRenderer;
