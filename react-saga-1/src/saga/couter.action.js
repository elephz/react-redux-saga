import {put,delay} from 'redux-saga/effects'
import {APP_ACTION_ADD,APP_ACTION_REM,APP_ACTION_CLR,APP_ACTION_ADD_ASYNC} from '../Constants';

//ส่วนนี้จะส่งไปที่ reducer
export function* setIncrementAction(){
    yield put({type:APP_ACTION_ADD})
}

export function* setIncrementAsyncAction(){   // step 3 รับค่ามากจาก saga watch
    yield delay(1000)
    yield put({type:APP_ACTION_ADD_ASYNC}) //ส่งค่าต่อไปให้ reducer type == APP_ACTION_ADD_ASYNC
}

export function* setDecrementAction(){
    yield put({type:APP_ACTION_REM})
}

export function* setClearAction({payload}){
    yield put({type:APP_ACTION_CLR,payload})
}

