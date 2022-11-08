import { useDispatch, useSelector } from 'react-redux';
import { changeRegisterName, changeRegisterEmail, changeRegisterPassword } from '../ActionReducers/RegisterSlice';
import "./register.css";
import './Login'
import { Link, useNavigate }from "react-router-dom";

function Register() {
  // const [name, setname] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const { registerName, registerEmail, registerPassword } = useSelector((state) => state.Register)

  const navigate = useNavigate();
  const callingFunc = (e) => {

    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      }),
    };
    fetch("http://localhost:3001/register", requestOptions);
    navigate('/login');
  };

  return (
    <div className="login-box">
      <h2>Register</h2>
      <div className="user-box">
        <input
          type="text"
          name="name"
          onKeyUp={(e) => dispatch(changeRegisterName(e.target.value))}
        />
        <label>Username</label>
      </div>
      <div className="user-box">
        <input
          type="text"
          name="email"
          onKeyUp={(e) => dispatch(changeRegisterEmail(e.target.value))}
        />
        <label>Email</label>
      </div>
      <div className="user-box">
        <input
          type="password"
          name="password"
          onKeyUp={(e) => dispatch(changeRegisterPassword(e.target.value))}
        />
        <label>Password</label>
      </div>
      {/* <div class="user-box">
        <input type="password" name="" required=""/>
        <label>Confirm Password</label>
      </div> */}
        <button  onClick={()=>callingFunc() } >Submit</button>
        <br></br>
        <Link to="/">Already have an Account?</Link>
    </div>
  );
}
export default Register;
