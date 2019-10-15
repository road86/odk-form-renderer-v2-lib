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
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders App correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
