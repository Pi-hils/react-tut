const express = require('express')
const app = express();
const cors = require ('cors');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "password",
  database: "mealReview"
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

client.connect();

app.post("/api/insert", (req,res) => {

  const meal_name = req.body.meal_name
  const review = req.body.review
  const psqlInsert = "INSERT INTO meal_reviews(meal_name, review) VALUES(?,?);"
  client.query(psqlInsert, [meal_name, review], (err, result)=> {
    console.log(result)
  });
 });

app.listen(3001,() =>{
  console.log("running on port 3001");
});