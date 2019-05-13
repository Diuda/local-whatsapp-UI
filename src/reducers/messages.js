import { USERS_FETCHED, LOAD_CHAT_HISTORY, MESSAGE_SENT, MESSAGE_RECIEVED } from '../constants/constant';


const initialState = {
	users: [],
	activeUser: null
}



export default function chat(state=initialState, { type, payload }) {
	switch (type) {
		//add sent message to redux store
		case MESSAGE_SENT:{
			//look for user mapped with message and update users message array
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

		//add receive message to redux store
		case MESSAGE_RECIEVED:{
			//look for user mapped with message and update users message array
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

		//add users to redux store
		case USERS_FETCHED: return { ...state, users: payload }

		//update currently selected user in redux store
		case LOAD_CHAT_HISTORY: return {...state, activeUser: payload }
		default: return state;
	}

}
