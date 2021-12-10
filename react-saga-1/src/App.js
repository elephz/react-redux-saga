import React from 'react'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import {useSelector,useDispatch} from 'react-redux';
import { APP_ACTION_ADD_ASYNC, APP_ACTION_CLR, APP_ACTION_REM } from './Constants';

// import * as appActions from "./actions/app.action";
export default function App() {

  // const [count,setCount] = useState(0)
   const appReducer = useSelector(({appReducer})=>appReducer)

    const action = (type,payload) => dispatch({type,payload})

   const box1Reducer = useSelector(({box1Reducer})=>box1Reducer)

   const dispatch = useDispatch()
  return (
    <div style={{padding:10}}>
      <div style={{display:"flex",flexDirection:"row"}}>
         <button onClick={()=> action(APP_ACTION_ADD_ASYNC) } >Add</button>  {/*  step 1 call action to saga action */}
        <button onClick={()=> action(APP_ACTION_REM)} >REM</button>
        <button onClick={()=> action(APP_ACTION_CLR,10)} >ClR</button>
      </div>
      <h1 >Gorn : {appReducer.count} ,B1({box1Reducer.counter1})</h1>
      <Box1 />
      <Box2 />
      <Box3 />
    </div>
  )
}
