const express = require('express')
const app = express();
const { Client } = require('pg');

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "password",
  database: "mealReview"
});

client.connect();

app.get('/', (req,res) => {
 });

app.listen(3001,() =>{
  console.log("running on port 3001");
});