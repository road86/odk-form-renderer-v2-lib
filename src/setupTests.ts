// This is used to set up stuff for tests e.g. configs, icons, etc
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GlobalWithFetchMock } from 'jest-fetch-mock';

enzyme.configure({ adapter: new Adapter() });

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
/* tslint:disable-next-line no-var-requires */
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;
