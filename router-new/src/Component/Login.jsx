// import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <p>This is Login page.</p>
      <p>
        New Here? Please <nbsp />
        <span
          style={{ cursor: "pointer", fontSize: "18px", color: "red" }}
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </p>
      <p
        onClick={() => navigate("/")}
        style={{ cursor: "pointer", color: "green" }}
      >
        Home
      </p>
    </div>
  );
}

export default Login;
