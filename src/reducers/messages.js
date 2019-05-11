import { SEND_MESSAGE, RECIEVE_MESSAGE, LOAD_MESSAGE  } from '../constants/constant';



//TODO hafl the things
export default function(state, { type, payload }) {
	switch (type) {
		case SEND_MESSAGE: return { users: [...state.users, payload] };
		case RECIEVE_MESSAGE: return { users: [...state.users, payload] };
		case LOAD_MESSAGE: return { users: payload };
			
		default: return state;
	}
}