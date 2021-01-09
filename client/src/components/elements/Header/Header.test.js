import { configure,shallow } from 'enzyme';
import Header from './Header';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe("test the header functionality", () => {
  let app;
  beforeEach(() => {
    app = shallow(<Header />);
  });
 

  it("should render the Image", () => {
    expect(app.find('img.rmdb-logo').length).toEqual(1);
  });

  it("should render the Wrapper div ", () => {
    expect(app.find('div.rmdb-header').length).toEqual(1);
  });

});