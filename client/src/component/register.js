import React, { useState } from 'react';

import {  Modal    ,   Button ,TextField, Select, MenuItem,Typography } from '@mui/material';
import { ButtonOrange, Form, StyledLink } from './util/buttonOrange';
import '../routes/login/loginPage.css';
import DialogProvider from './dialogbox';
const Register = ({ onSubmitForm, registerData, onChangeField }) => {
    const [errors, setErrors] = useState({});
    const checkIfNotEmty = (data) => data === "undefined" || data.trim().length === 0
    const validateForm = async () => {
        let errorsmassage = {};
        if (checkIfNotEmty(registerData.userName)) errorsmassage.userName = "*User name is require";
        if (checkIfNotEmty(registerData.role)) errorsmassage.role = "*Role is require";
        if (checkIfNotEmty(registerData.budgetLimit)) errorsmassage.budgetLimit = "*BudgetLimit is require";
        if (checkIfNotEmty(registerData.income)) errorsmassage.income = "*Income is require";
        if (checkIfNotEmty(registerData.email)) errorsmassage.email = "*Email is require";
        if (checkIfNotEmty(registerData.password)) errorsmassage.password = "*Password is require";
        // else if (!(registerData.userName).match(/^[a-zA-Z ]*$/)) {
        //   errorsmassage.userName = "*Please enter alphabet characters only.";
        // }
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
            <h1 className='neaonLabel'><span>Register To</span><span>Smart Budget!</span></h1>
            <Form onSubmit={onSubmit}>
                <div className='familyForm'></div>
                {/* </DialogProvider> */}
     
                <StyledLink
          to="/"
        >
           Already have an account? &nbsp;
        </StyledLink>
                <label>User Name</label>
                <TextField
                    name="userName"
                    label="User Name"
                    variant="outlined"
                    type="text"
                    value={registerData.userName}
                    onChange={(e) => {
                        onChangeField("userName", e.target.value)
                    }}
                />
                <h5 style={{ color: "red", margin: "0px" }}>{errors.userName}</h5>
                <label>Budget Limit</label>
                <TextField
                    name="budgetLimit"
                    label="Budget Limit"
                    variant="outlined"
                    type="text"
                    value={registerData.budgetLimit}
                    onChange={(e) => {
                        onChangeField("budgetLimit", e.target.value)
                    }}
                />
                <h5 style={{ color: "red", margin: "0px" }}>{errors.budgetLimit}</h5>
                <label>Your income</label>
                <TextField
                    name="income"
                    label="Your income"
                    variant="outlined"
                    type="text"
                    value={registerData.income}
                    onChange={(e) => {
                        onChangeField("income", e.target.value)
                    }}
                />
                <h5 style={{ color: "red", margin: "0px" }}>{errors.income}</h5>
                <label>Email</label>
                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={registerData.email}
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
                    value={registerData.password}
                    onChange={(e) => {
                        onChangeField("password", e.target.value)
                    }}
                />
                <h5 style={{ color: "red", margin: "0px" }}>{errors.password}</h5>
                <label>Your Role</label>
                <Select
                    value={registerData.role}
                    label="Your Role"
                    onChange={(e) => {
                        onChangeField("role", e.target.value)
                    }}
                >
                    <MenuItem value="pairant">pairant</MenuItem>
                    <MenuItem value="child">child</MenuItem>
                </Select>
                <h5 style={{ color: "red", margin: "0px" }}>{errors.role}</h5>

                <DialogProvider/>
                <div style={{ position: 'relative', textAlign: 'center', bottom: '-50px' }}>
                    <ButtonOrange
                        type="submit"
                        variant="contained"
                    >
                        Register
                    </ButtonOrange>
                </div>
            </Form>
        </>
    );
};
export default Register;
