// import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p>This is Home Index page.</p>
      <button style={{ background: "grey" }} onClick={() => navigate("/login")}>
        Login
      </button>{" "}
      <button
        style={{ background: "grey" }}
        onClick={() => navigate("/register")}
      >
        Register
      </button>
    </div>
  );
}

export default Home;
