import { useRef, useEffect } from "react";

export function Focus() {
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const inputRef = useRef(null);
  return (
    <>
      <h2>useRef for focusing</h2>
      <input type="text" placeholder="Fill this" ref={inputRef} />
    </>
  );
}
