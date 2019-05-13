import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from './containers/App';

// var App = require('./containers/App');
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component testing', function() {

	it('should return no of elements in App', () => {
		const wrapper = shallow(<App />);
		const editText = <div className='parent-wrapper'></div>;
		expect(wrapper).to.have.lengthOf(1);

});

chai.use(chaiEnzyme())

})