import React, { useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import App2 from './App2';



function App() {
  const [result, setResult] = useState('no backend meesage sent'); 
  const [result2,setResult2]=useState('get message unshiown');
  const[x,y]=useState(''); 

  const handleButtonClick = async () => {

      const response = await axios.post('http://localhost:8080/appo', {
        dataToSend: x
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const resultFromApi = response.data;

  
      setResult(resultFromApi);
    
  };


  const get=async()=>{
    const res=await axios.get('http://localhost:8080/appo',{
        headers:{
            'content-type':'application/json'
        },
        
    })
    const data =await res.data; 
    console.log(data);
    setResult2(JSON.stringify(data));
   
}

useEffect(() => {
  get();
}, []);


  return (
    <div>
    <div className='app'>
      
      <input
        type="text"
        value={x}
        onChange={(e) => y(e.target.value)}
        placeholder="enyter your post request"
      />
      </div>
  
      <button onClick={handleButtonClick}>Post</button>
      <br/><span/>
      {/* <button onClick={get}>GET</button> */}
      
      <h5>{result}</h5>
      <br/>
 
      <h5>{result2}</h5>

      
      <App2 data='text for props' imagex='https://picsum.photos/200/300' />  
      <App2 imagex='https://picsum.photos/200' data='snljdhjlsjkj'/>
    </div>
  );
}

export default App;
