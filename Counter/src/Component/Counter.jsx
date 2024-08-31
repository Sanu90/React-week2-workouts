import { useState } from "react";
import "./Counter.css";
export function Counter() {
  let [count, setCount] = useState(0);
  let add = () => {
    setCount(count + 1);
  };
  let sub = () => {
    count>0 && setCount(count - 1);
  };
  return (
    <>
      {count}
      <br />
      <br />
      {count}{" "}
      <button id="b1" onClick={add}>
        +
      </button>{" "}
      <button id="b2" onClick={sub}>
        -
      </button>{" "}
      {count}
      <br />
      <br />
      {count}
    </>
  );
}
