import { shallow } from 'enzyme';
import Header from './Header';

test('renders link', () => {
  const app = shallow(<Header />);

  it("should render the Image", () => {
    expect(app.find('img.rmdb-logo').length).toEqual(1);
  });

  it("should render the Wrapper div ", () => {
    expect(app.find('div.rmdb-header').length).toEqual(1);
  });

});