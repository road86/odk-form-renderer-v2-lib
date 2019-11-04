import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Provider } from 'react-redux';
import Integer from '..';
import store from '../../../../../store';
import { assignFieldValueAction } from '../../../../../store/ducks/formState';
import { selectAllDropDownFieldElement } from './fixtures';

describe('containers/fields/group/Select One', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders renders without crashing', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      fieldElement: selectAllDropDownFieldElement,
      fieldParentTreeName: '',
      fieldValue: ['a', 'b'],
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
      fieldElement: selectAllDropDownFieldElement,
      fieldParentTreeName: '',
      fieldValue: ['a', 'b'],
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
