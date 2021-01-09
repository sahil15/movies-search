import { configure,mount } from 'enzyme';
import FourColGrid from './FourColGrid';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe("test the props of col grid", () => {
    const props = {
        loading:false,
        header:"test header",
        children:[]
    }
    const FourColGridComponent = mount(<FourColGrid {...props} />);
    it("should contain prop loading", () => {
        expect(FourColGridComponent.prop('loading')).toEqual(false);
    });
    
    it("should contain div with rmdb-grid class", () => {
        expect(FourColGridComponent.find('div.rmdb-grid').length).toEqual(1);
      });
    
}); 