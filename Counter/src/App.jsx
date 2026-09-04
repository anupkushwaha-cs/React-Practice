
import React, {useState} from 'react'

const App = () => {
  const [Counter, setCounter] = useState(10);

if(Counter<20){
var addValue = () =>{
  setCounter(Counter +1)
}



}

  if(Counter>0){
      var removeValue=()=>{
    setCounter( Counter -1)
  }
  }

  return (
    <div>
      <h1>Counter is - {Counter}</h1>
      <button onClick={addValue}>Increase</button>
      <button onClick={removeValue}>Decrease</button>
    </div>
  )
}

export default App