import React from 'react'
import { useContext } from 'react'
// import { userCtx,usx} from '../../App.js';
import {data1} from '../../Reduce.js'

export default function App3() {
  const input='input1'
    const input2='input2'

    const {state,dispatch}=useContext(data1);
   
  return (
    <>

          {/* <p>{user.key}{user.key2}</p>
          <>{user2}</> */}
          
    <div className='red'>
  <button onClick={()=>{
    dispatch(input);
   }}>click</button>

<button onClick={()=>{
    dispatch(input2);
   }}>click2</button>
    </div>

    </>
  )
}
