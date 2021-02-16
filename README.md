# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
```
npx create-react-app .
```

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



## Useful resources
 - [Beginners react tutorial](https://www.youtube.com/watch?v=CKADIFku_fQ&list=PLpPqplz6dKxX8KhvEx5AoDJ61N9SIOFYh&index=2)

 - React documentation](https://reactjs.org/).


### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)


## Creating a backend
- `mkdir sever`
- `cd server`
- Run `npm init` for package.json (click 'yes' for all)
- create `index.js` 
To add express and body parser
- `npm install express body-parser psql`
- Run `npm i pg`
- `npm install nodemon` (to keep you from refreshing)
To create Express server 
Go to index.js (server) and add 
In index.js, add\
const express = require()
In package.json
add to the script..
```
  "scripts": {
    "start": "node index.js",
    "devStart": "nodemon index.js", 
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- Run `npm run devStart` in the cmmdline

Accessing psql\
On commandline, type psql
- CREATE DATABASE "NAME OF DATABASE"
- \c "NAME OF DB" + CREATE TABLE meal_reviews(id SERIAL PRIMARY KEY, meal_name VARCHAR(100),review TEXT);
On tablePlus
- fill in the parts on the form, username (hilda.amp), databasename = "NAME OF DATABASE IN PSQL"
<br>
In index.js(server), add to the top
```
const { Client } = require('pg');

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "password",
  database: "mealReview"
});

client.connect();
```

```
  //  app.get('/', (req,res) => {
     const psqlInsert = "INSERT INTO meal_reviews(meal_name, review) VALUES('red velvet cupcake','Awesome');"
    // client.query("select * from meal_reviews",(err,result) => {
    client.query(psqlInsert, (err, result)=> {

    // when movie is inserted, write Hello Hilda
    if(!err){
      console.log(result.rows);
    }
    client.end();
  //  res.send("Hello there!!");
   })


  // });
  ```
  Client and Service interaction
  - Go to client -> src -> App.js --> set states
  - Add useState and userEffect inside your React import
  - Install Axios get get your own API(making API request to our database), run `npm i axios`
