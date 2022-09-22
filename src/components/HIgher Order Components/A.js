import React ,{useState}from 'react'
import Counter from './Counter'

function A(props) {
   const {count,increment ,name} = props
  return (
    <div>
      <button onClick ={increment}>{name} {count}</button>
    </div>
  )
}

export default Counter(A,5)
