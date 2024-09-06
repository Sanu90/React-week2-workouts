import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [b1, setB1] = useState(0);
  const [b2, setB2] = useState(100);
  const plus = () => {
    setB1(b1 + 1);
  };
  const minus = () => {
    setB2(b2 - 1);
  };

  let isEven = useMemo(() => {
    let sum = 0;
    while (sum > 500000000) sum++;
    console.log("hey isEven", b1);
    return b1 % 2 === 0;
  },[b1])
  
  return (
    <>
      <h2>Example for useMemo</h2>
      <div>
        {b1} ---- <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <button onClick={plus}>Plus</button>
      <div>{b2}</div>
      <button onClick={minus}>Minus</button>
    </>
  );
}

export default App;
