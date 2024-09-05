import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "./Component/Button";
import { Home } from "./Component/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
