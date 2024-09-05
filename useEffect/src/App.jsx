import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("yellow");

  let colour = ["green", "magenta"];

  useEffect(() => {
    console.log("inside useEffect",color);
    return (()=>{
      console.log("Return of useEffect",color);
      
    })
  },[color]);

  return (
    <>
      <h3 style={{ color: color }}>{count}</h3>
      <button onClick={() => count < 10 && setCount(count + 1)}>
        Add
      </button>{" "}
      <button onClick={() => count > 0 && setCount(count - 1)}>Sub</button>{" "}
      <button
        onClick={() =>
          setColor((item) => (item === colour[0] ? colour[1] : colour[0]))
        }
      >
        Color change
      </button>
    </>
  );
}

export default App;
