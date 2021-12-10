import { takeEvery, all } from "redux-saga/effects";
import {
  APP_ACTION_REM_REQ,
  APP_ACTION_CLR_REQ,
  APP_ACTION_ADD_REQ,
  APP_ACTION_ADD_ASYNC_REQ
} from "../Constants";
import {
  setClearAction,
  setDecrementAction,
  setIncrementAction,
  setIncrementAsyncAction,
} from "./couter.action";

//ส่วนนี้จะรับ action มาจาก ui

function* watchIncrementAction() {
  yield takeEvery(APP_ACTION_ADD_REQ, setIncrementAction);
}

function* watchIncrementAsyncAction() {  // step  2 รับ action มาจาก ui type = APP_ACTION_ADD_ASYNC , watch (คอยตรวจจับ)
  yield takeEvery(APP_ACTION_ADD_ASYNC_REQ, setIncrementAsyncAction); // ส่งต่อไปให้ function setIncrementAsyncAction
}

function* watchDecrementAction() {
  yield takeEvery(APP_ACTION_REM_REQ, setDecrementAction);
}

function* watchClearAction() {
  yield takeEvery(APP_ACTION_CLR_REQ, setClearAction);
}

export default function* rootSaga() {
    yield all([
        watchClearAction,
        watchDecrementAction,
        watchIncrementAction,
        watchIncrementAsyncAction
    ])
}
