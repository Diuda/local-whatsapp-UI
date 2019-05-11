import { call, put, takeEvery, all } from "redux-saga/effects";
import DBServices from "../services/index";
import { LOAD_MESSAGE, RECIEVE_MESSAGE, SEND_MESSAGE, LOAD_USERS } from '../constants/constant';



//TODO SEND and RECIEVE MESSAGE
export function *rootSaga() {
	yield all([
		takeEvery("USER_FETCH", loadUsers),
		takeEvery("USER_MESSAGES_FETCH", loadMessage)
	])
}



export function* loadUsers() {

      try {
		const response = yield call(DBServices.getUsers);
		const payload = response ? response : {};
            yield put({
                  type: LOAD_USERS,
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
            yield call(DBServices.getMessages, action.payload);
            yield put({
                  type: SEND_MESSAGE,
                  layer: action.payload
            });
            // return;
            action.callbackSuccess();
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