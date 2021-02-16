import React, { useState, useEffect }  from 'react';
import "./App.css";
import Axios from 'axios'

function App() {

  const [meal_name, setMeal_name] = useState('')
  const [review, setReview] = useState('')

  const submitReview = () =>{
    Axios.post("http://localhost:3001/api/insert", {
      meal_name:meal_name, 
      review: review
    }).then(()=>{
      alert('Has been inserted')
    })
  };
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

      <button onClick={submitReview}>Submit</button>
    </div>
    </div>
  );
}

export default App;
