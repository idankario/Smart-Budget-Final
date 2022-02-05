import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { ButtonOrange, Form, StyledLink } from './util/buttonOrange';
import '../routes/login/loginPage.css';

const Login = ({ onSubmitForm, formData, onChangeField }) => {
  const [errors, setErrors] = useState({});
  const checkIfNotEmty = (data) => data === "undefined" || data.trim().length === 0
  const validateForm = async () => {
    let errorsmassage = {};
    if (checkIfNotEmty(formData.email)) errorsmassage.email = "*Email is require";
    if (checkIfNotEmty(formData.password)) errorsmassage.password = "*Password is require";
    if (checkIfNotEmty(formData.userName)) errorsmassage.userName = "*User name is require";
    if (Object.keys(errorsmassage).length === 0) {
      setErrors({});
      let error = await onSubmitForm();
      setErrors(error);
    }
    else {
      setErrors(errorsmassage);
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    validateForm()
  }
  return (
    <>
      <h1 className='neaonLabel'><span>Login</span><span>Smart Budget!</span></h1>
      <Form onSubmit={onSubmit}>
        <div className='familyForm'></div>
        <label>User Name</label>
        <TextField
          name="userName"
          label="User Name"
          variant="outlined"
          type="text"
          value={formData.userName}
          onChange={(e) => {
            onChangeField("userName", e.target.value)
          }}
        />
        <h5 style={{ color: "red", margin: "0px" }}>{errors.userName}</h5>
        <label>Email</label>
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={(e) => {
            onChangeField("email", e.target.value)
          }}
        />
        <h5 style={{ color: "red", margin: "0px" }}>{errors.email}</h5>
        <label>Password</label>
        <TextField
          className='text'
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={formData.password}
          onChange={(e) => {
            onChangeField("password", e.target.value)
          }}
        />
        <h5 style={{ color: "red", margin: "0px" }}>{errors.password}</h5>
        <StyledLink
          to="/register"
        >
          New user? Register Now
        </StyledLink>
        <div style={{ position: 'relative', textAlign: 'center', bottom: '-50px' }}>

          <ButtonOrange
            type="submit"
            variant="contained"
            sx={{ width: '100px' }}
          >
            Login
          </ButtonOrange>
        </div>
      </Form>
    </>
  );
};
export default Login;
