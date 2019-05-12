import { SEND_MESSAGE, RECIEVE_MESSAGE, LOAD_MESSAGE, USERS_FETCHED, LOAD_CHAT_HISTORY, MESSAGE_SENT } from '../constants/constant';


const initialState = {
	users: [],
	activeUser: null
}


//TODO hafl the things
export default function chat(state=initialState, { type, payload }) {
	switch (type) {
		case MESSAGE_SENT: {
				let newValue = state.users.map(user => {
					if(user.id === state.activeUser){
						return {
							...user,
							messages: [...user.messages, payload]
						}
					}
					return user;
				})

				return { ...state, users: newValue };


		}
		case RECIEVE_MESSAGE: return { users: [...state.users, payload] };
		case LOAD_MESSAGE: return { users: payload };
		case USERS_FETCHED: return { ...state, users: payload } ;
		case LOAD_CHAT_HISTORY: return {...state, activeUser: payload };
		default: return state;
	}

}
