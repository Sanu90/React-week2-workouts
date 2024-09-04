import { useRef, useEffect } from "react";

export const Test = () => {
  useEffect(() => {
    //focus input element
    aRef.current.focus()
  }, []);
  const aRef = useRef(null);
  console.log("useRef-->", aRef.current);
  //   aRef.current.style.color="red";

  return (
    <>
      <input type="text" ref={aRef} />
    </>
  );
};
