import { SEND_MESSAGE, RECIEVE_MESSAGE, LOAD_USERS, LOAD_CHAT_HISTORY } from '../constants/constant';



export const loadUsers = () => ({
	type: LOAD_USERS
})

export const userChatHistory = (id) =>({
	type: LOAD_CHAT_HISTORY, payload: id
})

export const sendMessage = (id, message) => ({
	type: SEND_MESSAGE, payload: {userid: id, message: message}
});


export const recieveMessage = (data) => ({
	type: RECIEVE_MESSAGE, payload: data
});