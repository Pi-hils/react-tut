const express = require('express')
const app = express()

app.get('/', (res,req)=>{
  res.setEncoding("Hello world");
});

app.listen(3001,() =>{
  console.log("running on port 3001");
});