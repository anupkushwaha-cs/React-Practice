import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  var addValue = ()=>{
    setCount(count + 1);
  }

  var DecValue = () =>{
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter = {count}</h1>
      <button onClick ={addValue}>Increase</button>
      <button onClick={DecValue}>Decrease</button>
    </div>
  )
}

export default App