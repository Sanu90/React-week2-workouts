import "./App.css";
import Child1 from "./Component/child1";

function App() {
  let a = 10;
  return (
    <div style={{backgroundImage: `url("https://via.placeholder.com/500")`}}>
      <h2>Hey</h2>
      <Child1 a={a} />
    </div>
  );
}

export default App;
