import { useRef } from "react";

export function InputStyleChange() {
  const inputRef = useRef("");
  inputRef.current.style.width = "460px";

  return (
    <div>
      <h2>Update the input field style using useRef</h2>

      <input type="text" value="dummy" ref={inputRef} />
    </div>
  );
}
