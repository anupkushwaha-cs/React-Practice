import React, {useState} from 'react';

const App = () => {


  const [Counter, setCounter] = useState(5);

  console.log("Rendering.....");
  
var Badhao = () =>{
  setCounter(Counter + 1);
}

var Ghatao = () =>{
  setCounter(Counter - 1);
}
  return (
    <div>
      <h1>Counter is {Counter}</h1>
      <button onClick={Badhao}>Increase</button>
      <button onClick={Ghatao}>Decrease</button>
    </div>
  )
}

export default App