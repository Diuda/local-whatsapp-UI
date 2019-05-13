import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import { Provider } from "react-redux";
// import store from "../../store/index";
import UserStrip from '../userStrip';

// var App = require('./containers/App');
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('User Strip Component testing', function() {

	it('should return image, name and latest message', () => {
		// const wrapper = shallow(<UserStrip store={store}/>);
		// const editText = <div className='parent-wrapper'></div>;
		// expect(wrapper).to.contain(editText);

});

chai.use(chaiEnzyme())

})