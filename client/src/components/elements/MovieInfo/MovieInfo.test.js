import { configure,mount } from 'enzyme';
import MovieInfo from './MovieInfo';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe("test that it renders the movie info", () => {

    const props = {
        movie:{
            Title:"Harry Potter",
            Location:"Delhi",
            SoundEffects:["dolbi"],
            imdbRating:"9.0",
            Language:"Hindi",
            Plot:"This is the movie description"
        }
        
    }
    const MovieInfoComponent = mount(<MovieInfo {...props} />);
    it("should contain wrapper div with class rmdb-movieinfo", () => {
        expect(MovieInfoComponent.find('div.rmdb-movieinfo').length).toEqual(1);
    });

    it("should contain movie info title", () =>{
        expect(MovieInfoComponent.prop('movie').Title).toEqual("Harry Potter");
    });

    it("should render the movie text",()=>{
        expect(MovieInfoComponent.find('div.rmdb-movieinfo-text').length).toEqual(1);
    })
    
});