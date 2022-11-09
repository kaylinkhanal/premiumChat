import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import React from "react";
import { useDispatch } from 'react-redux';
import { changeLoginName, changeLoginToken } from '../ActionReducers/LoginSlice';

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const finalFunc = (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    };
    fetch("http://localhost:3001/users/login", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        dispatch(changeLoginName(result.name))
        dispatch(changeLoginToken(result.token))
        navigate('/chat')
      })
  };

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if (value === "admin") {
      error = "Nice try!";
    }
    return error;
  }

  return (
    <div className="App-Login">
      <h1>Sign In</h1>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          finalFunc(values);
        }}
      >
        {({ errors, touched, handleSubmit, isValidating }) => (
          <Form onSubmit={handleSubmit}>
            <label>Email: </label>
            <Field
              name="email"
              validate={validateEmail}
              placeholder="Enter Your Email"
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <br></br>
            <label>password:</label>
            <Field
              name="password"
              validate={validatePassword}
              placeholder="Enter Your Password"
            />
            {errors.username && touched.password && (
              <div>{errors.password}</div>
            )}

            <br></br>
            <button type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <p>New here?</p>
      <Link to="/register">
        <>Register</>
      </Link>
      <br />
    </div>
  );
}

export default Login;
