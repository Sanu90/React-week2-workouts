import { useReducer } from "react";
import "./App.css";

function reducer(state,action){
  if(action==='increment'){
    return state+1;
  }else{
    return state-1;
  }

}

function App() {
  const [value,dispatch]=useReducer(reducer,0)
  return (
    
    <>
      <button onClick={()=>{dispatch('increment')}}>+</button>
      <div>Counter: {value}</div>
      <button onClick={()=>{dispatch('decrement')}}>-</button>
    </>
  );
}

export default App;
