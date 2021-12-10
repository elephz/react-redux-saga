import { APP_ACTION_ADD, APP_ACTION_CLR, APP_ACTION_REM ,APP_ACTION_ADD_ASYNC } from "../Constants";

const initialState = {
  count: 0,
  account: {
    username: "admin",
    password: "1234",
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_ACTION_ADD:
      return { ...state, count: state.count + 1 };
    case APP_ACTION_ADD_ASYNC:    //step 4 รับค่ามาจาก saga action
      return { ...state, count: state.count + 1 };  //อัปเดตค่า state
    case APP_ACTION_REM:
      return { ...state, count: state.count - 1 };
    case APP_ACTION_CLR:
      return { ...state, count: payload };

    default:
      return state;
  }
};
