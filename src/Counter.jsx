import { useState } from "react"

export function Counter({ count, modifyCounter }) {

  return (
    <>
      {count} 
      <br/>
      <button onClick={() => modifyCounter(1)} className="btn" > Add 1 </button>
      <br/>
      <button onClick={() => modifyCounter(-count)} className="btn">Reset</button>        
    </>
  )
} 