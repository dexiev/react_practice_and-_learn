import React, { useState } from 'react'

const Practice = () => {

    const [count, setCount]=useState(0)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Practice


