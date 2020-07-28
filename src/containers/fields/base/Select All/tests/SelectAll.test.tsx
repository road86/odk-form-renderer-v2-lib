import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../../../store';
import { assignFieldValueAction } from '../../../../../store/ducks/formState';
import SelectAllRadio from '../Radio';
import { selectAllRadioFieldElement } from './fixtures';

describe('containers/fields/group/Select All/Dropdown', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders renders without crashing for Select All Radio', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      choices: {},
      csvList: {},
      defaultLanguage: 'English',
      fieldElement: selectAllRadioFieldElement,
      fieldParentTreeName: '',
      fieldValue: ['a', 'b'],
      getFormSubmitStatusSelector: false,
    };
    shallow(
      <Provider store={store}>
        <SelectAllRadio {...props} />
      </Provider>
    );
  });

  it('renders correctly for Select All Radio', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      choices: {},
      csvList: {},
      defaultLanguage: 'English',
      fieldElement: selectAllRadioFieldElement,
      fieldParentTreeName: '',
      fieldValue: ['a', 'b'],
      getFormSubmitStatusSelector: false,
    };
    store.dispatch(
      assignFieldValueAction(props.fieldElement.name, props.fieldValue)
    );
    const wrapper = mount(
      <Provider store={store}>
        <SelectAllRadio {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
