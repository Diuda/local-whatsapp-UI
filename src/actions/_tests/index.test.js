import * as actions from '../index';
import * as types from '../../constants/constant';
import { expect } from 'chai';



describe('Action Testing', () => {
	it('should create action for loading users', () => {
		const expectedLoadUser = {
			type: types.LOAD_USERS
		}
		// expect('hello').to.equal('hello')
		expect(actions.loadUsers()).to.eql(expectedLoadUser)
	});

	it('should create action for sending message', () => {
		
		const payload = {userid: 1, message: 'hello'};
		const expectedSendMessage = {
			type: types.SEND_MESSAGE,
			payload: payload
		};
		// expect('hello').to.equal('hello')
		expect(actions.sendMessage(1, 'hello')).to.eql(expectedSendMessage)
	});

	it('should create action for receiving message', () => {
		
		const payload = {userid: 1, message: 'hello'};
		const expectedReceiveMessage = {
			type: types.RECIEVE_MESSAGE,
			payload: payload
		};
		// expect('hello').to.equal('hello')
		expect(actions.recieveMessage(payload)).to.eql(expectedReceiveMessage)
	});
})