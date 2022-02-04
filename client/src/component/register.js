import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import ButtonOrange from './util/buttonOrange';
import Select from '@material-ui/core/Select';
import '../routes/register/registerPage.css';

const Login = ({ onSubmitForm, formData, onChangeField }) => {
    const [errors, setErrors] = useState({});

    const checkIfNotEmty = (data) => data === "undefined" || data.trim().length === 0
    const validateForm = () => {
        let errorsmassage = {};
        if (checkIfNotEmty(formData.fullName)) errorsmassage.fullName = "*FullName is require";
        if (checkIfNotEmty(formData.userName)) errorsmassage.userName = "*UserName is require";
        if (checkIfNotEmty(formData.email)) errorsmassage.email = "*Email is require";
        if (checkIfNotEmty(formData.password)) errorsmassage.password = "*Password is require";
        if (checkIfNotEmty(formData.userName)) errorsmassage.userName = "*UserName is require";
        if (checkIfNotEmty(formData.income)) errorsmassage.income = "*income is require";
        if (checkIfNotEmty(formData.role)) errorsmassage.role = "*role is require";
        if (checkIfNotEmty(formData.budgetLimit)) errorsmassage.budgetLimit = "*budgetLimit is require";
        // else if (!(formData.userName).match(/^[a-zA-Z ]*$/)) {
        //   errorsmassage.userName = "*Please enter alphabet characters only.";
        // }
        if (Object.keys(errorsmassage).length === 0) {
            setErrors({});
            onSubmitForm();
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
            <form className='root' onSubmit={onSubmit}>
                <div className='familyForm'></div>
                <h5 style={{ color: "red", margin: "0px" }}>{errors.fullName}</h5>
                <label>Full Name</label>
                <TextField
                    name="fullName"
                    label="Full Name"
                    variant="outlined"
                    type="text"
                    value={formData.fallName}
                    onChange={(e) => {
                        onChangeField("fullName", e.target.value)
                    }}
                />
                <h5 style={{ color: "red", margin: "0px" }}>{errors.userName}</h5>
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
                <h5 style={{ color: "red", margin: "0px" }}>{errors.role}</h5>
                <label>Income</label>
                <TextField
                    name="income"
                    label="Income"
                    variant="outlined"
                    type="text"
                    value={formData.income}
                    onChange={(e) => {
                        onChangeField("income", e.target.value)
                    }}
                />
                <h5 style={{ color: "red", margin: "0px" }}>{errors.budgetLimit}</h5>
                <label>Budget Limit</label>
                <TextField
                    name="budgetLimit"
                    label="Budget Limit"
                    variant="outlined"
                    type="text"
                    value={formData.budgetLimit}////////
                    onChange={(e) => {
                        onChangeField("budgetLimit", e.target.value)
                    }}
                />

                <h5 style={{ color: "red", margin: "0px" }}>{errors.email}</h5>
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
                <h5 style={{ color: "red", margin: "0px" }}>{errors.role}</h5>
                <label>your role</label>
                <Select
                    native
                    value={this.state.role}
                    onChange={this.handleChange('role')}
                    input={<FilledInput name="role" id="filled-age-native-simple" />}
                >
                    <option value="" />
                    <option value={10}>pirents</option>
                    <option value={20}>chiled</option>
                </Select>


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
                <div style={{ position: 'relative', textAlign: 'center', bottom: '-50px' }}>
                    <ButtonOrange
                        type="submit"
                        variant="contained"
                    >
                        Register
                    </ButtonOrange>
                </div>
            </form>
        </>
    );
};
export default Register;
