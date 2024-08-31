import { useState } from "react";
import "./App.css";

function App() {
  const [tog, setTog] = useState(true);

  function toggle() {
    setTog(!tog);
  }
  return (
    <>
      <h1>{tog ? "Yes" : "No"}</h1>
      <button style={{ color: "red" }} onClick={toggle}>
        Toggle
      </button>
    </>
  );
}

export default App;
