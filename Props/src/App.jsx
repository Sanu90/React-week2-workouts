import "./App.css";
import Child1 from "./Component/child1";

function App() {
  let a = 10;
  return (
    <>
      <h2>Hey</h2>
      <Child1 a={a} />
    </>
  );
}

export default App;
