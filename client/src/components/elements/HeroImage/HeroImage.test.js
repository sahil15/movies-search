import { configure,mount } from 'enzyme';
import HeroImage from './HeroImage';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe("test that it renders the background image", () => {

    const props = {
        title:"Hero Image",
        text:"This is a background image"
    }

    const HeroImageComponent = mount(<HeroImage {...props} />);
    it("should contain wrapper div with class rmdb-heroimage", () => {
        expect(HeroImageComponent.find('div.rmdb-heroimage').length).toEqual(1);
    });

    it("should contain hero image title", () =>{
        expect(HeroImageComponent.prop('title')).toEqual("Hero Image");
    });
    
});