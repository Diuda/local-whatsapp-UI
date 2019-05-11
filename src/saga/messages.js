import { call, put, takeEvery, all, takeLatest } from "redux-saga/effects";
import DBServices from "../services/DBServices";
import { LOAD_MESSAGE, RECIEVE_MESSAGE, SEND_MESSAGE, LOAD_USERS, USERS_FETCHED, MESSAGE_SENT } from '../constants/constant';



//TODO SEND and RECIEVE MESSAGE
export function *rootSaga() {
	yield all([
		takeEvery(LOAD_USERS, loadUsers),
		takeEvery(SEND_MESSAGE, sendMessage)
	])

	// yield takeLatest(LOAD_USERS, loadUsers);
}



export function* loadUsers() {

      try {
		const response = yield call(DBServices.getUsers);
		const payload = response ? response : {};
            yield put({
                  type: USERS_FETCHED,
                  payload
            });
            // action.callbackSuccess();
      } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
      }
}

export function* loadMessage(action) {

      try {
		const response = yield call(DBServices.getMessages, action.payload);
		const payload = response ? response : {};
            yield put({
                  type: LOAD_MESSAGE,
                  payload
            });
            // action.callbackSuccess();
      } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
      }
}

export function* sendMessage(action) {

      try {
		console.log(action.payload)
            yield call(DBServices.sendMessage, action.payload);
            yield put({
                  type: MESSAGE_SENT,
                  payload: {text: action.payload.message, action: 'sent'}
            });
            // return;
            // action.callbackSuccess();
      } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
      }
}


export function* recieveMessage(action) {

      try {
            yield call(DBServices.getMessages, action.payload);
            yield put({
                  type: RECIEVE_MESSAGE,
                  layer: action.payload
            });
            // return;
            action.callbackSuccess();
      } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
      }
}