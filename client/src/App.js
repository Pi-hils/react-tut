import React, { useState, useEffect }  from 'react';
import "./App.css";
import Axios from 'axios'

function App() {

  const [meal_name, setMeal_name] = useState('')
  const [review, setReview] = useState('')

  return (
    <div className="App">
    <h1>Hello there!</h1>

    <div className="form">
      <label>Meal Name:</label>
        <input type="text" name="meal_name" onChange={(e) =>{
          setMeal_name(e.target.value)
        }}/>
        <label>Review:</label>
        <input type="text" name="review" onChange={(e) =>{
          setReview(e.target.value)
        }}/>

      <button>Submit</button>
    </div>
    </div>
  );
}

export default App;
