import { call, put, takeEvery, all, takeLatest } from "redux-saga/effects";
import DBServices from "../services/DBServices";
import { RECIEVE_MESSAGE, SEND_MESSAGE, LOAD_USERS, USERS_FETCHED, MESSAGE_SENT, MESSAGE_RECIEVED } from '../constants/constant';



export function *rootSaga() {
	yield all([
		takeEvery(LOAD_USERS, loadUsers),
		takeEvery(SEND_MESSAGE, sendMessage),
		takeEvery(RECIEVE_MESSAGE, recieveMessage)
	])

}



export function* loadUsers() {

      try {
		const response = yield call(DBServices.getUsers);
		const payload = response ? response : {};
            yield put({
                  type: USERS_FETCHED,
                  payload
            });
      } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
      }
}


export function* sendMessage(action) {

      try {
            yield call(DBServices.sendMessage, action.payload);
            yield put({
                  type: MESSAGE_SENT,
                  payload: {text: action.payload.message, action: 'sent'}
		});
		

		yield put({
			type: RECIEVE_MESSAGE,
			payload: action.payload
		})
      } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
      }
}


export function* recieveMessage(action) {

	
	try {
		yield call(DBServices.recieveMessage, action.payload);
            yield put({
                  type: MESSAGE_RECIEVED,
                  payload: {text: action.payload.message, action: 'recieved' }
            });
      } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
      }
}