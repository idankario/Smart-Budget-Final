import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {  FaTimes } from 'react-icons/fa';
import ButtonOrange from './util/buttonOrange';

const Login = ({ onSubmitForm, isEdit, formData, onChangeField, onClickCancel }) => {
  const [errors, setErrors] = useState({});
  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: '13px 40px',
      maxHeight: '552px',
      background: '#fff',
      borderRadius: '25px',
      marginTop: '90px',
      backgroundImage: isEdit === -1 ? `` : "",
      backgroundPosition: 'bottom center',
      backgroundRepeat: 'no-repeat',
      justifyContent: 'space-around',
      '& .MuiTextField-root': {
        width: '540px',
      },
      '& .MuiInputBase-input ': {
        background: '#F6F7FB',
      },
    },
  }));
  const classes = useStyles();
  const checkIfNotEmty = (data) => data === "undefined" || data.trim().length === 0
  const validateForm = () => {
    let errorsmassage = {};
    if (checkIfNotEmty(formData.email)) errorsmassage.email = "*Email is require";
    // else if (!(formData.email).match(/^[a-zA-Z ]*$/)) {
    //   errorsmassage.email = "*Please enter alphabet characters only.";
    // }
    if (checkIfNotEmty(formData.password)) errorsmassage.password = "*Password is require";
    if (checkIfNotEmty(formData.userName)) errorsmassage.userName = "*UserName is require";
    // else if (!(formData.userName).match(/^[a-zA-Z ]*$/)) {
    //   errorsmassage.userName = "*Please enter alphabet characters only.";
    // }
    if (Object.keys(errorsmassage).length === 0) {
      setErrors({});
      onSubmitForm(formData.email,formData.password);
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
      <form className={classes.root} onSubmit={onSubmit}>
        <h2 style={{ textAlign: 'center' }}>{isEdit === -1 ? "Login Smart Budget" : "Register Smart Budget"}</h2>
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
        <div style={{ position: 'relative', textAlign: 'center', bottom: '-50px' }}>
          <ButtonOrange
            type="submit"
            variant="contained"
            style={{ display: isEdit === -1 ? "inline-flex" : "none" }}
          >
            Login
          </ButtonOrange>

          <ButtonOrange
            style={{ marginRight: '20px', display: isEdit === -1 ? "none" : "inline-flex" }}
            variant="contained"
            onClick={onClickCancel}
          >
            <FaTimes />
          </ButtonOrange>
          <ButtonOrange
            type="submit"
            style={{ display: isEdit === -1 ? "none" : "inline-flex" }}
            variant="contained"
          >
           
          </ButtonOrange>
        </div>
      </form>
    </>
  );
};
export default Login;
