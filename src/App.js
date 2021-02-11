import React from 'react';


function App() {

  var myName="Hilda Amponsah"

  function alertingNames(){
    alert(myName);
  }

  return (
    <div className="App">
    <button onClick={alertingNames}>Click Me</button>
    <br></br>
    <input type='text' />
    <br></br>
    <h1>Hello World, my name is {myName}</h1>
    </div>
  );
}

export default App;
