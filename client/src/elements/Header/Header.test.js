import { shallow } from 'enzyme';
import Header from './Header';

test('renders link', () => {
  const app = shallow(<Header />);

  it("should render the Image", () => {
    expect(app.find('img.rmdb-logo').length).toEqual(1);
  });
});