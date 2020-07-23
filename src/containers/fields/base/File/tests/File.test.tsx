import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Provider } from 'react-redux';
import File from '..';
import store from '../../../../../store';
import { assignFieldValueAction } from '../../../../../store/ducks/formState';
import { fileFieldElement } from './fixtures';

describe('containers/fields/base/Photo', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      defaultLanguage: 'English',
      fieldElement: fileFieldElement,
      fieldParentTreeName: '',
      fieldValue: '',
    };
    shallow(
      <Provider store={store}>
        <File {...props} />
      </Provider>
    );
  });

  it('renders correctly', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      defaultLanguage: 'English',
      fieldElement: fileFieldElement,
      fieldParentTreeName: '',
      fieldValue: '',
    };
    store.dispatch(
      assignFieldValueAction(props.fieldElement.name, props.fieldValue)
    );
    const wrapper = mount(
      <Provider store={store}>
        <File {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
