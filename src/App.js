import React from 'react';
import HelloWorld from './Components/HelloWorld'

function App() {

  var myName = "Hils"

  function alertingNames(){
    alert(myName)
  }
  return (
    <div className="App">
    <h1>Hello there, {myName}</h1>
    <HelloWorld />
    
    <button onClick={alertingNames}>Click Me</button>
    <HelloWorld />
    </div>
  );
}

export default App;
