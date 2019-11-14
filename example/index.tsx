import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import Thing from '../.';
import { DEMO_FORM_JSON } from './constants';

const App = () => {
  const handleSubmit = (userInput: any) => {
    // tslint:disable-next-line: no-console
    console.log(userInput);
  };
  const props = {
    defaultLanguage: 'English',
    formDefinitionJson: DEMO_FORM_JSON,
    handleSubmit,
  };
  return (
    <div>
      <Thing {...props} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
