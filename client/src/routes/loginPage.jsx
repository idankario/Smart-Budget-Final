import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Title, Main, WhiteBoard, FamilyImage, Button } from '../components/util/board';
import Divider from '@mui/material/Divider';
import { TextField } from '@mui/material';
const LoginPage = () => {
    const [errors, setErrors] = useState({});
    const [data, setForm] = useState({
        userName: '',
        email: '',
        password: '',
      });
      const onChangeField = (key, value) => {
        setForm({
          ...data,
          [key]: value,
        });
      };
    return (
        <>
            <Main>
                <section>
                    <Title>
                        <div></div>
                        <h1>LOG <span>IN!</span></h1>
                    </Title>
                    <FamilyImage></FamilyImage>
                    <WhiteBoard>
                        <form >
                            <label>User Name</label>
                            <TextField
                                name="userName"
                                label="User Name"
                                variant="outlined"
                                type="text"
                                value={data.userName}
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
                                value={data.email}
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
                                value={data.password}
                                onChange={(e) => {
                                    onChangeField("password", e.target.value)
                                }}
                            />
                            <h5 style={{ color: "red", margin: "0px" }}>{errors.password}</h5>
                            {/* <StyledLink
                                to="/register"
                            >
                                New user? Register Now
                            </StyledLink> */}
            

                                <Button
                                    type="submit"    
                                >
                                    Login
                                </Button>
                       
                        </form>


                    </WhiteBoard>
                </section>
            </Main>
        </>
    );
};
export default LoginPage;
