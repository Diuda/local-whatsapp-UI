import db from '../model/db';


export const getMessages = (username) => {
	db.table('user').get({name: username}, user => {
		return user.messages;
	})

}


export const getUsers = () => {
	db.table('user')
	.toArray()
	.then(user => {
		return user;
	})
	.catch(error => {
		return error;
	})
}