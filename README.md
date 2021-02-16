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
- `npm install nodemon` (to keep you from refreshing)
To create Express server 
Go to index.js (server) and add 
```
const express = require()