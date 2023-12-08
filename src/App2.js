import React from 'react'


export default function App2(props) {
  return (
    <div className='app2'>
      <div>{props.data}</div>
      <img src={props.image} alt='error'/>
     
    </div>
  );
}