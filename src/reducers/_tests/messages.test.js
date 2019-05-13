import chat from '../messages';
import { expect } from 'chai';
import * as types from '../../constants/constant';




describe('Reducer testing', () => {
	it('should return initial state', () => {
		expect(chat(undefined, {})).to.eql({
			users: [],
			activeUser: null
		})
	});


	it('should return users fetched state', () => {
		expect(chat(undefined, {
			type: types.USERS_FETCHED,
			payload: [{
				id:1,
				name:'Divyanshu',
				imageURL:'/assets/images/xyz.jpg',
				messages: [{
					text: 'hi bye',
					action: 'sent'
				}]	
			}]
		})).to.eql({
			users: [{
				id:1,
				name:'Divyanshu',
				imageURL:'/assets/images/xyz.jpg',
				messages: [{
					text: 'hi bye',
					action: 'sent'
				}]	
			}],
			activeUser: null
		})
	});

	it('should return active user', () => {
		expect(chat({
			users: [{
				id:1,
				name:'Divyanshu',
				imageURL:'/assets/images/xyz.jpg',
				messages: [{
					text: 'hi bye',
					action: 'sent'
				}]
			}],
			activeUser: null
		}, 
		{
			type: types.LOAD_CHAT_HISTORY,
			payload: 1
		}
		)).to.eql({
			users: [{
				id:1,
				name:'Divyanshu',
				imageURL:'/assets/images/xyz.jpg',
				messages: [{
					text: 'hi bye',
					action: 'sent'
				}]
			}],
			activeUser: 1
		})
	});

	it('should handle send message', () => {
		expect(chat({
			users: [{
				id:1,
				name:'Divyanshu',
				imageURL:'/assets/images/xyz.jpg',
				messages: [{
					text: 'hi bye',
					action: 'sent'
				},
				{
					text: 'hello',
					action: 'receive'
				}]
			},
			{
				id:2,
				name:'Paddy',
				imageURL:'/assets/images/abc.jpg',
				messages: [{
					text: 'hi bye',
					action: 'sent'
				}]
			},
		],
			activeUser: 2
		}, 
		{
			type: types.MESSAGE_SENT,
			payload: {
				text: 'how are you',
				action: 'sent'
			}
		}
		)).to.eql({
			users: [{
				id:1,
				name:'Divyanshu',
				imageURL:'/assets/images/xyz.jpg',
				messages: [{
					text: 'hi bye',
					action: 'sent'
				},
				{
					text: 'hello',
					action: 'receive'
				}]
			},
			{
				id:2,
				name:'Paddy',
				imageURL:'/assets/images/abc.jpg',
				messages: [	
				{
					text: 'hi bye',
					action: 'sent'
				},
				{
					text: 'how are you',
					action: 'sent'
				}
				
			]
			}
		],
			activeUser: 2
		})
	})


	it('should handle recieve message', () => {
		expect(chat({
			users: [{
				id:1,
				name:'Divyanshu',
				imageURL:'/assets/images/xyz.jpg',
				messages: [{
					text: 'hi bye',
					action: 'sent'
				},
				{
					text: 'hello',
					action: 'receive'
				}]
			},
			{
				id:2,
				name:'Paddy',
				imageURL:'/assets/images/abc.jpg',
				messages: [{
					text: 'hi bye',
					action: 'sent'
				}]
			},
		],
			activeUser: 1
		}, 
		{
			type: types.MESSAGE_SENT,
			payload: {
				text: 'hey sup?',
				action: 'receive'
			}
		}
		)).to.eql({
			users: [{
				id:1,
				name:'Divyanshu',
				imageURL:'/assets/images/xyz.jpg',
				messages: [{
					text: 'hi bye',
					action: 'sent'
				},
				{
					text: 'hello',
					action: 'receive'
				},
				{
					text: 'hey sup?',
					action: 'receive'
				}]
			},
			{
				id:2,
				name:'Paddy',
				imageURL:'/assets/images/abc.jpg',
				messages: [	
				{
					text: 'hi bye',
					action: 'sent'
				}]
			}
		],
			activeUser: 1
		})
	})


})