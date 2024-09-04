import "./App.css";
import { useState } from "react";
import { Test } from "./Components/Test";

function App() {
  const array = ["Choose One", "Kerala", "Telangana", "Goa", "Assam"];

  let [val, setValue] = useState("");
  console.log("val is:", val);

  return (
    <>
      <h2>Change the state value according to drop down</h2>
      <select name="" id="" onChange={(e) => setValue(e.target.value)}>
        {array.map((val) => {
          return (
            <option value={val} key={val}>
              {val}
            </option>
          );
        })}
      </select>
      <h3>
        Drop down value is:<span style={{ color: "red" }}> {val}</span>
      </h3>
      <h2 style={{ color: "grey"}}>
        The below input box is for an useRef
      </h2>
      <Test />
    </>
  );
}

export default App;
