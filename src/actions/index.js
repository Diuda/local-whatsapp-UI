import { SEND_MESSAGE, RECIEVE_MESSAGE, LOAD_MESSAGE, LOAD_USERS } from '../constants/constant';



export const loadUsers = () => ({
	type: LOAD_USERS
})

export const loadMessages = (data) => ({
	type: LOAD_MESSAGE, payload: data
})


export const sendMessage = (data) => ({
	type: SEND_MESSAGE, payload: data
});


export const recieveMessage = (data) => ({
	type: RECIEVE_MESSAGE, payload: data
});