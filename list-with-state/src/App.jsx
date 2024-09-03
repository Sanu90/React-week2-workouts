import { useState } from "react";
import "./App.css";

function App() {
  let [val, setVal] = useState("one");

  let array = ["one", "two", "three", "four"];
  return (
    <>
      <label>Array elements</label>
      <br></br>
      <select name="elements" onChange={(e) => setVal(e.target.value)}>
        {array.map((val, index) => {
          console.log("value", val);

          return (
            <option key={index} value={val}>
              {val}
            </option>
          );
        })}
      </select>

      <p>val is: {val}</p>
    </>
  );
}

export default App;
