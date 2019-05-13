import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import { Provider } from "react-redux";
// import store from "../../store/index";
import UserStrip from '../userStrip';
import ProfileBar from '../profileBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Searchbar from '../searchbar';
import ChatUserBar from '../chatUserBar';

// var App = require('./containers/App');
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('Profile Bar Component testing', function() {

	it('should have image', () => {
		const wrapper = shallow(<ProfileBar />);
		expect(wrapper.find('img')).to.have.length(1);
});

	it('should have 3 options', () => {
		const wrapper = shallow(<ProfileBar />);
		expect(wrapper.find('FontAwesomeIcon')).to.have.length(3);
	});	


})

describe('Search Bar Component testing', function() {

	it('should have input', () => {
		const wrapper = shallow(<Searchbar />);
		expect(wrapper.find('input')).to.have.length(1);
});	


})

describe('Chat User Bar Component testing', function() {

	it('should have img', () => {
		const wrapper = shallow(<ChatUserBar />);
		expect(wrapper.find('img')).to.have.length(1);
});
	it('should have 3 options', () => {
		const wrapper = shallow(<ChatUserBar />);
		expect(wrapper.find('FontAwesomeIcon')).to.have.length(3);
	});

	it('should have users name', () => {
		const wrapper = shallow(<ChatUserBar />);
		expect(wrapper.find('.chat-sender-name')).to.have.length(1);
	});

})