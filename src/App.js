import React from 'react';
import HelloWorld from './Components/HelloWorld'

function App() {

  return (
    <div className="App">
    <h1>Hello there!</h1>
    <HelloWorld name="Hils" email="girlCoder@techworld.com" role="Fullstack dev"/>
    <HelloWorld name="Mari" email="girlTherapist@therapist.com" role="Child Therapist"/>
    <HelloWorld name="Pels" email="girlBoss@bossorld.com" role="CPO"/>
    </div>
  );
}

export default App;
