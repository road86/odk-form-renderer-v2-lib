import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Provider } from 'react-redux';
import Decimal from '..';
import store from '../../../../../store';
import { assignFieldValueAction } from '../../../../../store/ducks/formState';
import { decimalFieldElement } from './fixtures';

describe('containers/fields/base/Decimal', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      defaultLanguage: 'English',
      fieldElement: decimalFieldElement,
      fieldParentTreeName: '',
      fieldValue: 12.23,
    };
    shallow(
      <Provider store={store}>
        <Decimal {...props} />
      </Provider>
    );
  });

  it('renders correctly', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      defaultLanguage: 'English',
      fieldElement: decimalFieldElement,
      fieldParentTreeName: '',
      fieldValue: 12.23,
    };
    store.dispatch(
      assignFieldValueAction(props.fieldElement.name, props.fieldValue)
    );
    const wrapper = mount(
      <Provider store={store}>
        <Decimal {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
