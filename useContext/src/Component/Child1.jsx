// import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

import GrandChild from "./GrandChild";

const Child1 = () => {
  let a = useContext(AppContext);
  return (
    <div>
      <p>This is a child para with value  {a}</p>
      <p>
        <GrandChild />
      </p>
    </div>
  );
};

export default Child1;
