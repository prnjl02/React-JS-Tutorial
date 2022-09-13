import React from 'react'
import { useState,useEffect } from 'react'

function UseStateWithObj() {
    const [name, setName] = useState({ firstName: '', lastName: '' });
    const [items, setItems] = useState([]);
    const [count,setCount] = useState(0);
    const [names, setNames] = useState("");
    const insertItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10) +1
        }])
    }
    useEffect(()=>{
        document.title= `You clicked ${count} times`;
        console.log('use effect called');
    },[count])
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count {count}</button>
            <input type="text" value={names} onChange={e => setNames(e.target.value)} />
            <form >
                <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            </form>
            <h2>First Name : {name.firstName}</h2>
            <h2>Last Name : {name.lastName}</h2>
            <button onClick={insertItem}>Insert in array</button>
            <h2>List is :</h2>
            <ul>
                {
                    items.map(e => (
                        <li key={e.id}>{e.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseStateWithObj
