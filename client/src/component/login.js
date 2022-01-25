import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ButtonOrange from './util/buttonOrange';
const Login = ({ onSubmitForm,formData, onChangeField }) => {
  const [errors, setErrors] = useState({});
  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: '13px 40px',
      background: '#fff',
      borderRadius: '25px',
      marginTop: '90px',
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
  const validateForm = async() => {
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
      let error=await onSubmitForm();
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
      <form className={classes.root} onSubmit={onSubmit}>
        <h2 style={{ textAlign: 'center' }}>"Login Smart Budget" </h2>
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
          >
            Login
          </ButtonOrange>
        </div>
      </form>
    </>
  );
};
export default Login;
