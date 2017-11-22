import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

document.body.innerHTML = `<meta name="csrf-token" value="DUMMY-KEY"></meta>`;
