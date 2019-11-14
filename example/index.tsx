import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import Thing from '../.';
import { DEMO_FORM_JSON } from './constants';

const App = () => {
  const props = {
    defaultLanguage: 'English',
    formDefinitionJson: DEMO_FORM_JSON,
  };
  return (
    <div>
      <Thing {...props} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
