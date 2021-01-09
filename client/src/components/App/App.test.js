import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

import App from './App';
import Header from '../../components/elements/Header/Header';

describe("test the header component has been rendered", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  it("should show the Header Component", () => {
    expect(wrapper.find(Header).length === 1).toBeTruthy();
  });
});
