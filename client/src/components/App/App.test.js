import { mount } from 'enzyme';
import App from './App';
import CharacterName from './components/Home/Home';

test('renders learn react link', () => {
  const app = mount(<App />);

  it("should show the HomeComponent", () => {
    expect(wrapper.find(CharacterName).length === 1).toBeTruthy();
  });
});
