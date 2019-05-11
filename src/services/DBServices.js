import db from '../model/db';



const DBService = {
	getMessages: (username) => {
		db.table('user').get({name: username}, user => {
			return user.messages;
		})
		
	},

	getUsers: () => {

		
		// return Promise.resolve("sup");
		
		// return db.user.toArray();
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
	}
};


export default DBService;