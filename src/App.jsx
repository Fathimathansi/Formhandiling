import React, { useState } from 'react'
import  Counter from './Counter'

function App() {
  const[count,setCount] =  useState(0)
  function addCount(){
   setCount(count+1)
  }
  
  return (
    <div>
      <button onClick={addCount}>add</button>
     <Counter count={count} />
    </div>
  )
}

export default App
