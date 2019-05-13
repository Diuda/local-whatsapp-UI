import { call, put, takeEvery, all } from "redux-saga/effects";
import DBServices from "../services/DBServices";
import { RECIEVE_MESSAGE, SEND_MESSAGE, LOAD_USERS, USERS_FETCHED, MESSAGE_SENT, MESSAGE_RECIEVED } from '../constants/constant';
import uuid from 'uuid';


// Watcher saga to watch all the actions being done and load corresponding worker saga
export function *rootSaga() {
	yield all([
		takeEvery(LOAD_USERS, loadUsers),
		takeEvery(SEND_MESSAGE, sendMessage),
		takeEvery(RECIEVE_MESSAGE, recieveMessage)
	])

}


//saga to load user from IndexedDB through DBservices and dispatch action when users are fetched to be added in redux store from reducer
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



//saga to send message to IndexedDB through DBServices and dispatch actions when the message is sent to be added in redux store from reducer
export function* sendMessage(action) {

      try {
		const sentMessageID = uuid.v4();
		const message = {id: sentMessageID, message: action.payload.message, userid: action.payload.userid, action: 'sent'};
            yield call(DBServices.sendMessage, message);
            yield put({
                  type: MESSAGE_SENT,
                  payload: {id: sentMessageID, text: action.payload.message, action: 'sent'}
		});
		//manually trigger receive message action with same response on sending message
		yield put({
			type: RECIEVE_MESSAGE,
			payload: action.payload
		})
      } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
      }
}


//saga to receive message to IndexedDB through DBServices and dispatch actions when the message is sent to be added in redux store from reducer
export function* recieveMessage(action) {

	
	try {
		const receiveMessageID = uuid.v4();
		const message = {id: receiveMessageID, message: action.payload.message, userid: action.payload.userid, action: 'recieved'};
		yield call(DBServices.recieveMessage, message);
            yield put({
                  type: MESSAGE_RECIEVED,
                  payload: { id: receiveMessageID, text: action.payload.message, action: 'recieved' }
            });
      } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
      }
}