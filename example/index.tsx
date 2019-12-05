import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import Thing from '../.';
import {
  CSV_LIST,
  DEMO_FORM_JSON,
  languageOptions,
  sampleUserInput,
} from './constants';
import './index.css';

const App = () => {
  const handleSubmit = (userInput: any) => {
    // tslint:disable-next-line: no-console
    console.log(JSON.stringify(userInput));
  };

  const props = {
    csvList: CSV_LIST,
    defaultLanguage: 'English',
    formDefinitionJson: DEMO_FORM_JSON,
    handleSubmit,
    languageOptions,
    userInputJson: sampleUserInput,
  };

  return (
    <div>
      <Thing {...props} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
