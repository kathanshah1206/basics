const axios =require('axios')



   const post=async()=>{ 
    const res=await axios.post('http://localhost:8080/appo', {
    title: 'post object'
    }, {
    headers: {
        'Content-Type': 'application/json',
    },
    }).then(res=>console.log(res.data))
            
            
   }
   post();

axios.get('http://localhost:8080/appo',{
headers:{'content-Type':'application/json'}
}).then((response)=>{
console.log(response.data)
})



axios.get('http://localhost:8080/',{
    headers:{'content-Type':'application/json'}
}).then((response)=>
    console.log(response.data)
)