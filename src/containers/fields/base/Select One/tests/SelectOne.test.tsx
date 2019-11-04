import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../../../store';
import { assignFieldValueAction } from '../../../../../store/ducks/formState';
import SelectOneDropDown from '../Dropdown';
import SelectOneRadio from '../Radio';
import { selectOneDropDownFieldElement } from './fixtures';
import { selectOneRadioFieldElement } from './fixtures';

describe('containers/fields/group/Select One/Dropdown', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders renders without crashing for Drop Down', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      defaultLanguage: 'English',
      fieldElement: selectOneDropDownFieldElement,
      fieldParentTreeName: '',
      fieldValue: 'AL',
    };
    shallow(
      <Provider store={store}>
        <SelectOneDropDown {...props} />
      </Provider>
    );
  });

  it('renders correctly for DropDown', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      defaultLanguage: 'English',
      fieldElement: selectOneDropDownFieldElement,
      fieldParentTreeName: '',
      fieldValue: 'BD',
    };
    store.dispatch(
      assignFieldValueAction(props.fieldElement.name, props.fieldValue)
    );
    const wrapper = mount(
      <Provider store={store}>
        <SelectOneDropDown {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});

describe('containers/fields/group/Select One/Radio', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders renders without crashing for Radio', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      defaultLanguage: 'English',
      fieldElement: selectOneRadioFieldElement,
      fieldParentTreeName: '',
      fieldValue: 'AL',
    };
    shallow(
      <Provider store={store}>
        <SelectOneRadio {...props} />
      </Provider>
    );
  });

  it('renders correctly for Radio Button', () => {
    const mock: any = jest.fn();
    const props = {
      assignFieldValueActionCreator: mock,
      defaultLanguage: 'English',
      fieldElement: selectOneRadioFieldElement,
      fieldParentTreeName: '',
      fieldValue: 'BD',
    };
    store.dispatch(
      assignFieldValueAction(props.fieldElement.name, props.fieldValue)
    );
    const wrapper = mount(
      <Provider store={store}>
        <SelectOneRadio {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
