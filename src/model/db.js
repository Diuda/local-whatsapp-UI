import Dexie from 'dexie';

const db = new Dexie('UserData');

db.version(1).stores({user: "++id, name, *messages, messages.text, messages.time, messages.action"});




const addUser = (user) => {
	db.transaction('rw', db.user, () => {
		db.user.add(user);
	}).catch((err) => {
		console.log(err);
	});
}



//hardcoding users and initial messages
// addUser({name: 'div', imageURL: 'profile1.jpg', messages:[{'text': 'hello', 'action': 'sent'}]});
// addUser({name: 'paddy', imageURL: 'profile2.jpg', messages:[{'text': 'hi', 'action': 'sent'}]});
// addUser({name: 'achlendra', imageURL: 'profile3.jpg', messages:[{'text': 'bye', 'action': 'sent'}]});
// addUser({name: 'sinha', imageURL: 'profile4.jpg', messages:[{'text': 'sup', 'action': 'sent'}]});
// addUser({name: 'prakhar', imageURL: 'profile5.jpg', messages:[{'text': 'android', 'action': 'sent'}]});
// addUser({name: 'saujanya', imageURL: 'profile.jpg', messages:[{'text': 'cool', 'action': 'sent'}]});
// addUser({name: 'wally', imageURL: 'profile7.jpg', messages:[{'text': 'sure man', 'action': 'sent'}]});
export default db;