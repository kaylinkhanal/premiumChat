import { useDispatch, useSelector } from "react-redux";
import {
  changeRegisterName,
  changeRegisterEmail,
  changeRegisterPassword,
} from "../ActionReducers/RegisterSlice";
import "./register.css";
import "./Login";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
function Register() {
  const dispatch = useDispatch();
  const { registerName, registerEmail, registerPassword } = useSelector(
    (state) => state.Register
  );

  const navigate = useNavigate();
  const callingFunc = (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    };
    fetch("http://localhost:3001/register", requestOptions);
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(1, "Too Short!").max(20, "Too Long!"),
    // .required('Required'),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          callingFunc(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Name:</label>
            <Field name="name" placeholder="Enter Your Name" />

            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label>Email:</label>
            <Field name="email" type="email" placeholder="Enter Your Email" />

            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label>Password:</label>
            <Field name="password" placeholder="Enter Your Password" />

            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit" onClick={() => callingFunc()}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Register;
