import "./App.css";
import { useRef } from "react";

function App() {
  const textRef = useRef("green");

  let colorChange = () => {
    textRef.current.style.color = "green";
  };
  return (
    <>
      <h3>Change the color of text using useRef</h3>
      <code>Click the text to make the color change</code>
      <h1 style={{ cursor: "pointer" }} ref={textRef} onClick={colorChange}>
        Hello
      </h1>
    </>
  );
}

export default App;
