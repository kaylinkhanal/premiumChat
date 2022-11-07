import "./register.css";
// import './Login'
// import { Link} from "react-router-dom";
import { useState } from "react";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const callingFunc = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    };
    fetch("http://localhost:3001/register", requestOptions);
  };

  return (
    <div className="login-box">
      <h2>Register</h2>
        <div className="user-box">
          <input
            type="text"
            name="name"
            onKeyUp={(e) => setname(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="email"
            onKeyUp={(e) => setemail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            onKeyUp={(e) => setpassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        {/* <div class="user-box">
        <input type="password" name="" required=""/>
        <label>Confirm Password</label>
      </div> */}
        <button  onClick={()=>callingFunc()}>Submit</button>
        {/* <Link to="/">Already have an Account?</Link> */}
    </div>
  );
}
export default Register;
