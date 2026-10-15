import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  var addValue = ()=>{
    setCount(count+1);
  }

  var decValue = () =>{
    setCount(count -1);
  }

  return (
    <div>

      <h1>Counter = {count}</h1>
      <button onClick={addValue}>Increase</button>
      <button onClick={decValue}>Decrease</button>


    </div>
  )
}

export default App