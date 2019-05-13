import db from '../model/db';



const DBService = {

	//service to get all the data from table user -> IndexedDB
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


	//TODO send and recieve message might be implemented in one function only
	
	//service to push sent message to corresponding user in IndexedDB
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


	//service to push receieved message to corresponding user in IndexedDB
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