import { useContext } from "react";
import { AppContext } from "../App";

const GrandChild = () => {
  let a = useContext(AppContext);
  return <code>This is a code attribute in GC.. {a}</code>;
};

export default GrandChild;
