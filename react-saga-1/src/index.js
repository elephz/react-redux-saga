import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux Begin
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

//saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
const sagaMiddleward = createSagaMiddleware()

//Redux End
const store = createStore(reducers,composeWithDevTools(applyMiddleware(sagaMiddleward)));

sagaMiddleward.run(rootSaga)


//thunk = ทำให้ค่าที่ส่งไปสามาถเป็นแบบ async ได้
//logger แสดงค่าที่ผ่าน reducer ออกมาทาง console

const ReduxApp = () =>{
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ReduxApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
