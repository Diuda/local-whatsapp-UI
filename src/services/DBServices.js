import db from '../model/db';
import { sendMessage } from '../saga/messages';



const DBService = {
	getUsers: () => {
		return db.table('user')
		.toArray()
		.then(user => {
			if(user)
				return user;
			else
				return null;
		})
		.catch(error => {
			return error;
		})
	},

	sendMessage: (data) => {
		return db.table('user')
		.where('id')
		.equals(data.userid)
		.modify(user => user.messages.push({id: data.id, text: data.message, action: data.action}))
		.then(updated => {
			return updated;
		})
		.catch(err => {
			return err;
		})
	},

	recieveMessage: (data) => {
		return db.table('user')
		.where('id')
		.equals(data.userid)
		.modify(user => user.messages.push({id: data.id, text: data.message, action: data.action}))
		.then(updated => {
			return updated;
		})
		.catch(err => {
			return err;
		})
	}
};


export default DBService;