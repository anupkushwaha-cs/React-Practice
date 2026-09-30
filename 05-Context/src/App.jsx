import React from 'react'
import { MyCount } from '../Context'
import {useContext } from 'react'

const App = () => {
const {setCount, count} = useContext(MyCount)


  return (
    <div>
      <h1>Counter - {count}</h1>
      <button onClick = {()=>{
        setCount(count+1)
      }}>Increment</button>
    </div>
  )
}

export default App