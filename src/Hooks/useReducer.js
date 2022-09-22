import axios from 'axios'
import React , {useEffect,useReducer} from 'react'

// let initialState = 0;
// let reducer = (state, action)=> {
//    switch(action) {
//     case 'increment':
//         return state + 1
//     case 'decrement':
//         return state - 1
//     case 'reset':
//         return initialState
//     default:
//         return state            
//    }
// }

let initialState = {
    loading : true,
    error: "",
    posts : {}
}

const reducer = (state , action) => {
    switch(action.type) {
        case "FETCH_SUCCESS" :
            return {
                loading: false,
                posts : action.payload,
                error: ""
            }
            case "FETCH_FAIL" :
                return {
                    loading: false,
                    error: "Something went wrong",
                    posts: {}
                }    
    }
}
function UseReducer() {
   const [state , dispatch]= useReducer(reducer , initialState)
   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(resp => {
        dispatch({type:'FETCH_SUCCESS',payload:resp.data})
    })
    .catch(error => {
        dispatch({type:'FETCH_FAIL'})
    })
   },[])
  return (
    <div>
        <h1>Reducer Hook</h1>
        {/* <div>Count - {count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button> */}

    {state.loading ? 'loading':state.posts.title}
    {state.error ? state.error:null}
    </div>
  )
}

export default UseReducer
