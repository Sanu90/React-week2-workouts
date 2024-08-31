import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");
  const [output, setOutput] = useState();
  let Data_Cleared = '';

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then((response) => response.json())
      .then((json) => setOutput(json));
  }, [data]);

  function users() {
    setData("users");
  }
  function posts() {
    setData("posts");
  }
  function albums() {
    setData("albums");
  }
  function clear() {
    setOutput(Data_Cleared);
    console.log("hello");
  }

  return (
    <div className="App">
      <p>{JSON.stringify(output)}</p>
      {data && <h1>This is {data} data.</h1>}
      <button onClick={users}>users</button>
      <button onClick={posts}>posts</button>
      <button onClick={albums}>albums</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}

export default App;
