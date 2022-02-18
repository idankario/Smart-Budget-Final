import React, { useState } from 'react';
import { Title, Main, WhiteBoard, FamilyImage, Button, StyledLink } from '../components/board';
import Form from '../components/from';
import { isRequire } from '../components/util/validations';
import Terms from '../components/terms';
import { Select, MenuItem } from '@mui/material';
import axios from 'axios';
const RegisterPage = () => {
    const [errors, setErrors] = useState({});
    const [dataForm, setDataForm] = useState({
        userName: '',
        role: 'Parent',
        budgetLimit: '',
        income: '',
        email: '',
        password: '',
    });

    const dataType = [
        { type: 'text', label: 'User Name' },
        { type: 'number', label: 'Budget Limit' },
        { type: 'number', label: 'Income' },
        { type: 'email', label: 'Email' },
        { type: 'password', label: 'Password' }
    ];

    const onChangeField = (key, value) => {
        setDataForm({
            ...dataForm,
            [key]: value,
        });
    };
    const onRegister = async () => {
        try {
            let res = await axios({
                method: 'post',
                url: 'https://smartbudgetf.herokuapp.com/api/users/register',
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
        const objectErrors = await isRequire((({ role, ...o }) => o)(dataForm), dataType);
        setErrors(objectErrors);
        if (Object.keys(errors).length === 0) {
            let error = await onRegister();
            setErrors(error);
        };
    }
    return (
        <>
            <Main>
                <section>
                    <Title>
                        <div></div>
                        <h1>Sign <span>Up!</span></h1>
                    </Title>
                    <FamilyImage></FamilyImage>
                    <WhiteBoard>
                        <Form
                            formData={(({ role, ...o }) => o)(dataForm)}
                            typeData={dataType}
                            onFieldChange={onChangeField}
                            errorsForm={errors}
                            onSubmit={onSubmit}>
                            <label>Your Role</label>
                            <Select
                                value={dataForm.role}
                                label="Your Role"
                                onChange={(e) => {
                                    onChangeField("role", e.target.value)
                                }}
                            >
                                <MenuItem value="Parent">Parent</MenuItem>
                                <MenuItem value="Child">Child</MenuItem>
                            </Select>
                            <Terms />

                            <Button type="submit">
                                Register
                            </Button>
                            <StyledLink
                                to="/login"
                            >
                                Already have an account? &nbsp;
                            </StyledLink>
                        </Form>
                    </WhiteBoard>
                </section>
            </Main>
        </>
    );
};
export default RegisterPage;


