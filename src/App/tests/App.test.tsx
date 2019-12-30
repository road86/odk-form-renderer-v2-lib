import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../../App';
import store from '../../store';

describe('App', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders App without crashing', () => {
    const mock: any = jest.fn();
    const div = document.createElement('div');
    const props = {
      choices: {},
      csvList: {},
      defaultLanguage: 'English',
      fieldElements: [],
      formTitle: 'ODK',
      handleSubmit: mock,
      languageOptions: [
        {
          label: 'English',
          value: 'English',
        },

        {
          label: 'Bangla',
          value: 'Bangla',
        },
      ],
      userInputJson: {},
    };
    ReactDOM.render(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders App correctly', () => {
    const mock: any = jest.fn();
    const props = {
      choices: {},
      csvList: {},
      defaultLanguage: 'English',
      fieldElements: [],
      formTitle: 'ODK',
      handleSubmit: mock,
      languageOptions: [
        {
          label: 'English',
          value: 'English',
        },
        {
          label: 'Bangla',
          value: 'Bangla',
        },
      ],
      userInputJson: {},
    };
    const wrapper = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
