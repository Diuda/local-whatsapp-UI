import { SEND_MESSAGE, RECIEVE_MESSAGE, LOAD_USERS, LOAD_CHAT_HISTORY } from '../constants/constant';


//action to load users
export const loadUsers = () => ({
	type: LOAD_USERS
})

//action to load particular user chat
export const userChatHistory = (id) =>({
	type: LOAD_CHAT_HISTORY, payload: id
})

//action to send message
export const sendMessage = (id, message) => ({
	type: SEND_MESSAGE, payload: {userid: id, message: message}
});

//action to receive messgae
export const recieveMessage = (data) => ({
	type: RECIEVE_MESSAGE, payload: data
});