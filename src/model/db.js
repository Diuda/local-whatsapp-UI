import Dexie from 'dexie';

const db = new Dexie('UserData');

db.version(1).stores({user: "++id, name, *messages, messages.text, messages.time, messages.action"});


export default db;