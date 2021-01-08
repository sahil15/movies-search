import { mount } from 'enzyme';
import App from './App';
import Home from './components/Home/Home';

test('renders the App Component', () => {
  const app = mount(<App />);

  it("should show the HomeComponent", () => {
    expect(wrapper.find(Home).length === 1).toBeTruthy();
  });
});
