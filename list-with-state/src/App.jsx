import "./App.css";
import { useState } from "react";
// import { Test } from "./Components/Test";

function App() {
  const [color, setColor] = useState("grey");
  console.log("color is:", color);

  // const array = ["Choose One", "Kerala", "Telangana", "Goa", "Assam"];

  // let [val, setValue] = useState("");
  // console.log("val is:", val);

  // return (
  //   <>
  //     <h2>Change the state value according to drop down</h2>
  //     <select name="" id="" onChange={(e) => setValue(e.target.value)}>
  //       {array.map((val) => {
  //         return (
  //           <option value={val} key={val}>
  //             {val}
  //           </option>
  //         );
  //       })}
  //     </select>
  //     <h3>
  //       Drop down value is:<span style={{ color: "red" }}> {val}</span>
  //     </h3>
  //     <h2 style={{ color: "grey"}}>
  //       The below input box is for an useRef
  //     </h2>
  //     <Test />
  //   </>
  // );
  return (
    <>
      <div className="parent" style={{ background:  color  }}>
        <h2>Hello</h2>
      </div>
      <button
        onClick={() => {
          setColor("green");
        }}
      >
        GREEN
      </button>{" "}
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        RED
      </button>
    </>
  );
}

export default App;
