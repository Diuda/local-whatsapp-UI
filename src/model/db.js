import Dexie from 'dexie';
// eslint-disable-next-line no-unused-vars
import uuid from 'uuid';


const db = new Dexie('UserData');

db.version(1).stores({user: "++id, name, *messages, messages.text, messages.action, messages.id"});




// eslint-disable-next-line no-unused-vars
const addUser = (user) => {
	db.transaction('rw', db.user, () => {
		db.user.add(user);
	}).catch((err) => {
		console.log(err);
	});
}



//hardcoding users and initial messages
// addUser({name: 'div', imageURL: 'profile1.jpg', messages:[{ 'id': uuid.v4(), 'text': 'hello', 'action': 'sent'}]});
// addUser({name: 'paddy', imageURL: 'profile2.jpg', messages:[{ 'id': uuid.v4(), 'text': 'hi', 'action': 'sent'}]});
// addUser({name: 'achlendra', imageURL: 'profile3.jpg', messages:[{ 'id': uuid.v4(), 'text': 'bye', 'action': 'sent'}]});
// addUser({name: 'sinha', imageURL: 'profile4.jpg', messages:[{ 'id': uuid.v4(), 'text': 'sup', 'action': 'sent'}]});
// addUser({name: 'prakhar', imageURL: 'profile5.jpg', messages:[{ 'id': uuid.v4(), 'text': 'android', 'action': 'sent'}]});
// addUser({name: 'saujanya', imageURL: 'profile.jpg', messages:[{ 'id': uuid.v4(), 'text': 'cool', 'action': 'sent'}]});
// addUser({name: 'wally', imageURL: 'profile7.jpg', messages:[{ 'id': uuid.v4(), 'text': 'sure man', 'action': 'sent'}]});
export default db;