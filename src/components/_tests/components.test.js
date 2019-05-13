import React from 'react';
import { configure, shallow, mount} from 'enzyme';
import chai, { expect } from 'chai';
import { Provider } from "react-redux";
import UserStrip from '../userStrip';
import ProfileBar from '../profileBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Searchbar from '../searchbar';
import ChatUserBar from '../chatUserBar';
import ChatInput from '../chatInput';
import FallbackChatWindow from '../fallbackChatWindow';
import ReceiveChatBubble from '../recieveChatBubble';
import SentChatBubble from '../sentChatBubble';
import configureStore from 'redux-mock-store';

import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const initialState = { 
	chat:{
		users:[{id:1, name: 'Divyanshu', imageURL:'profile1.jpg', messages:[{id: '1990827a-8802-4722-9630-f38abc3cd927', text: 'hi', action: 'sent'}, {id: '3fe73c49-c480-4605-8994-96b9876ef63a', text: 'hi', action: 'recieved'}]}],
		activeUser: 1
	}
};

const mockStore = configureStore();
let store = mockStore(initialState);

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

describe('User Strip Component testing', function() {

	it('should render successfully ', () => {
		const wrapper = shallow(<UserStrip store={store} name='Divyanshu' imageURL='profile1.jpg' />);
		expect(wrapper.find('UserStrip')).to.have.length(1);
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
		const wrapper = shallow(<ChatUserBar name='Divyanshu' imageURL='profile1.jpg' />);
		expect(wrapper.find('img')).to.have.length(1);
});
	it('should have 3 options', () => {
		const wrapper = shallow(<ChatUserBar name='Divyanshu' imageURL='profile1.jpg' />);
		expect(wrapper.find('FontAwesomeIcon')).to.have.length(3);
	});

	it('should have users name', () => {
		const wrapper = shallow(<ChatUserBar name='Divyanshu' imageURL='profile1.jpg' />);
		expect(wrapper.find('.chat-sender-name')).to.have.length(1);
	});

})

describe('Chat Input Component testing', function() {

	it('should render Chat Input', () => {
		const wrapper = shallow(<ChatInput store={store} />);
		expect(wrapper.find('ChatInput')).to.have.length(1);
	});
})


describe('Fallback Chat Component testing', function() {

	it('should have image', () => {
		const wrapper = shallow(<FallbackChatWindow />);
		expect(wrapper.find('img')).to.have.length(1);
	});
})


describe('Receive Chat Component testing', function() {

	it('should render receieve chat bubble with text', () => {
		const wrapper = shallow(<ReceiveChatBubble text='hello' />);
		const message = <div className='recieve-msg-wrapper tri-right left-top'><div className='recieve-msg'>hello</div></div>
		expect(wrapper.contains(message)).to.equal(true);
	});
})

describe('Send Chat Component testing', function() {

	it('should render sent chat bubble with text', () => {
		const wrapper = shallow(<SentChatBubble text='hello' />);
		const message = <div className='sent-msg-wrapper tri-right right-top'><div className='sent-msg'>hello</div></div>
		expect(wrapper.contains(message)).to.equal(true);
	});
})