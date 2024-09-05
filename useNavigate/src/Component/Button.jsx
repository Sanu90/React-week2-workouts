import { useNavigate } from "react-router-dom";

export function Button() {
  const navigator = useNavigate();
  return (
    <>
      <button onClick={()=> navigator("/home")}>Redirect</button>
    </>
  );
}
