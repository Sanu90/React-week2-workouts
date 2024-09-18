import { useEffect, useRef, useState } from "react";
import "./App.css";

// function App() {
//   const displayRef = useRef(null);

//   useEffect(() => {
//     displayRef.current.focus();
//   }, []);

//   let display = () => {
//     console.log("hey", displayRef.current.value);

//     alert(`${displayRef.current.value}`);
//   };
//   return (
//     <>
//       <h2>Uncontrolled Components</h2>
//       <h4>Here the component change is handled by DOM.</h4>
//       <input
//         type="text"
//         name="name"
//         placeholder="Please input here"
//         ref={displayRef}
//       />
//       <button onClick={display}>OK</button>
//     </>
//   );
// }

function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  const display = () => {
    alert(`hey ${value}`);
  };
  return (
    <>
      <h2>Controlled Components</h2>
      <h4>Here React handles the component change.</h4>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      />
      <br></br>
      <button onClick={display}>OK</button>
    </>
  );
}

export default App;
