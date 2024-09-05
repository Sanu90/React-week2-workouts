// import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
const GrandChild = () => {
    let a = useContext(AppContext);
  console.log("aaaaaa",a);
  return (
    <div>
      <p>GrandChild {a}</p>
    </div>
  );
};

export default GrandChild;
