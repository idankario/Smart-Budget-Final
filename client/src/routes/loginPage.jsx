import React, { useState } from 'react';
import { Title, Main, WhiteBoard, FamilyImage, Button, StyledLink } from '../components/board';
import Form from '../components/from';
import { isRequire } from '../components/util/validations';
import axios from 'axios';
const LoginPage = () => {
    const [errors, setErrors] = useState({});
    const [dataForm, setDataForm] = useState({
        userName: '',
        email: '',
        password: '',
    });

    const dataType = [
        { type: 'text', label: 'User Name' },
        { type: 'email', label: 'Email' },
        { type: 'password', label: 'Password' }
    ];

    const onChangeField = (key, value) => {
        setDataForm({
            ...dataForm,
            [key]: value,
        });
    };

    const onLogin = async () => {
        try {
            let res = await axios({
                method: 'post',
                url: 'http://localhost:8000/api/users/login',
                data: { ...dataForm },
            })
            if (res.data.token) {
                localStorage.setItem('user', JSON.stringify(res.data));
                localStorage.setItem('token', res.data.token);
                window.location = '../menu'
            }
        } catch (error) {
            if (error)
                return error.response.data;
            else
                window.location = '../*';
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const objectErrors = await isRequire(dataForm, dataType);
        setErrors(objectErrors);
        if (Object.keys(objectErrors).length === 0) {
            let error = await onLogin();
            setErrors(error);
        };
    }

    return (
        <Main>
            <section>
                <Title>
                    <div></div>
                    <h1>LOG <span>IN!</span></h1>
                </Title>
                <FamilyImage></FamilyImage>
                <WhiteBoard>
                    <Form
                        formData={dataForm}
                        typeData={dataType}
                        onFieldChange={onChangeField}
                        errorsForm={errors}
                        onSubmit={onSubmit}
                    >
                        <Button type="submit">
                            Login
                        </Button>
                        <StyledLink to="/register">
                            New user? Register Now
                        </StyledLink>
                    </Form>
                </WhiteBoard>
            </section>
        </Main>
    );
};
export default LoginPage;


