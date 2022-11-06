import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: userName,
        Password: password,
      }),
    };
    fetch("http://localhost:3001/login", requestOptions);
  };

  return (
    <div ClassName="formInline">
      <form className="loginForm" action="">
        <input
          type="text"
          placeholder="UserName"
          onKeyUp={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onKeyUp={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginHandler}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
