import "./App.css";
import { Child1 } from "./Components/child1";

function App() {
  let value = 10;
  return (
    <div>
      <h1>Grand Parent</h1>
      <h2>
        <Child1 value={value} />
      </h2>
    </div>
  );
}

export default App;
