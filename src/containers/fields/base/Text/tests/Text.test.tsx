import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Provider } from 'react-redux';
import Text from '../';
import store from '../../../../../store';
import { assignFieldValueAction } from '../../../../../store/ducks/formState';
import { textFieldElement1 } from './fixtures';

describe('containers/fields/base/Text', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      fieldElement: textFieldElement1,
      fieldParentTreeName: '',
      fieldValue: 'hello',
    };
    shallow(
      <Provider store={store}>
        <Text {...props} />
      </Provider>
    );
  });

  it('renders correctly', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      fieldElement: textFieldElement1,
      fieldParentTreeName: '',
      fieldValue: 'hello',
    };
    store.dispatch(
      assignFieldValueAction(props.fieldElement.name, props.fieldValue)
    );
    const wrapper = mount(
      <Provider store={store}>
        <Text {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
