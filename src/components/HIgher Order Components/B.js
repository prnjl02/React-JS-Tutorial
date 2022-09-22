import React ,{useState}from 'react'
import Counter from './Counter'

function B(props) {
    const {count,increment, name} = props;
  return (
    <div>
      <button onMouseOver={increment}>{name} {count}</button>
    </div>
  )
}

export default Counter(B,10)
