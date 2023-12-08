// fetch('http://localhost:8080/',)
//   .then(response => response.json()).then(data=>console.log(data))
  

const get=async()=>{
  const res=await fetch('http://localhost:8080/',{
    method:'GET',
    headers:{
      'content-Type':'application/json'
    }

  })
  const data =await res.json();
  console.log(data)
}
get();

// fetch('http://localhost:8080/appo', {
//   method: 'POST', 
//   headers: {
//    'Content-Type': 'application/json',
//   },
//      body:JSON.stringify({ title: 'post object' }),
// })
//   .then(response => response.text())
//   .then(data => console.log(data))

const post=async()=>{
  const res=await fetch('http://localhost:8080/appo',{
    method:'POST',
    headers:{
'Content-Type':'application/json'
    },
    body:JSON.stringify({title:'post objrct'})
  })
  const data = await res.text();
  console.log(data);
}
post();


const get2 = async () => {

    const res = await fetch('http://localhost:8080/appo', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });



    const data = await res.json();
    console.log(data);
 
};

get2();

// fetch('http://localhost:8080/appo', {
//   method: 'GET', 
//   headers: {
//    'Content-Type': 'application/json',
//   },
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
  