import React, { createContext, useReducer } from "react";
import App2 from "./src2/App2.js";
const data1 = createContext();

function Reduce() {
  const reducer = (state, action) => {
    console.log(state, action);
    if (action === "input1") {
      return state + 5;
    }
    if (action === "input2") {
      return state - 5;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    //     <div className='red'>
    //    <button onClick={()=>{
    //     dispatch(input);
    //    }}>click</button>

    // <button onClick={()=>{
    //     dispatch(input2);
    //    }}>click2</button>
    //     </div>

    <>
      <data1.Provider value={{ state, dispatch }}>
        <App2 />
      </data1.Provider>
    </>
  );
}

export { data1 };
export default Reduce;
