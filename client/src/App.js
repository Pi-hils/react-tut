import React, { useState }  from 'react';
// import React, from 'react';
import "./App.css";

function App() {

  const [meal_review, setMeal_review] = useState('')
  const [review, setReview] = useState('')

  return (
    <div className="App">
    <h1>Hello there!</h1>
    <div className="form">
    <label>Meal Name:</label>
      <input type="text" name="mealName"/>
      <label>Review:</label>
      <input type="text" name="review"/>
      <button>Submit</button>
    </div>
    </div>
  );
}

export default App;
