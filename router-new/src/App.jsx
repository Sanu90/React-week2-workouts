import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import { Register } from "./Component/Register";

function App() {
  return (
    <>
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
