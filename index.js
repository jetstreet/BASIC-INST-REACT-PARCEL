import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'

function init(initialValue) {
  return { count: initialValue }
}

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      if (state.count <= 0) {
        return state
      }
      return { count: state.count - 1 } 
    default:
      throw new Error("L'action " + action.type + " est inconnue" )   
  }
}

function Test() {
 const [count, dispatch] = useReducer(reducer, 0, init)
 
  return <div>
    Hello michel
    compteur: {JSON.stringify(count)}
    <button onClick={() => dispatch({type: 'increment'})} >Increment</button>
    <button onClick={() => dispatch({type: 'decrement'})} >Decrement</button>
  </div>
}

ReactDOM.render(<Test />, document.getElementById('app'));