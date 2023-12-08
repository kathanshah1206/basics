const bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors')

const app = express();
const port = 8080; 
app.use(cors())

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('{"name":"John", "age":30, "car":null} ');
});

app.post('/appo', (req, res) => {
 let k=req.body;

 console.log(k);
 res.send('backend message ');
});



app.get('/appo', (req, res) => {
    res.send('{"kathan":"shah"}');
});


app.listen(port, () => {
  console.log(`Server is running `);
});
