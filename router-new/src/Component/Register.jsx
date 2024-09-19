// import React from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>This is Registration page.</p>

      <p>
        Already have account? Please <nbsp />
        <span
          style={{ cursor: "pointer", fontSize: "18px", color: "red" }}
          onClick={() => navigate("/login")}
        >
          login.
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
};
