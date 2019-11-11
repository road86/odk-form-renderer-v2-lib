import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Provider } from 'react-redux';
import Integer from '..';
import store from '../../../../../store';
import { assignFieldValueAction } from '../../../../../store/ducks/formState';
import { integerFieldElement1 } from './fixtures';

describe('containers/fields/group/Group', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders renders without crashing', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      defaultLanguage: 'English',
      fieldElement: integerFieldElement1,
      fieldParentTreeName: '',
      fieldValue: 100,
    };
    shallow(
      <Provider store={store}>
        <Integer {...props} />
      </Provider>
    );
  });

  it('renders correctly', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      defaultLanguage: 'English',
      fieldElement: integerFieldElement1,
      fieldParentTreeName: '',
      fieldValue: 120,
    };
    store.dispatch(
      assignFieldValueAction(props.fieldElement.name, props.fieldValue)
    );
    const wrapper = mount(
      <Provider store={store}>
        <Integer {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
