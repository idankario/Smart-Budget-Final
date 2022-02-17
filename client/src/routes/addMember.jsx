import React, { useState } from 'react';
import { Title, Main, WhiteBoard, FamilyImage, Button } from '../components/board';
import Form from '../components/from';
import { isRequire } from '../components/util/validations';
import { Select, MenuItem } from '@mui/material';
import axios from 'axios';
import BottomNav from '../components/navigation/bottomNav';

const AddMember = () => {
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

    const onAddMember = async () => {
        try {
            let res = await axios({
                method: 'POST',
                headers: { 'x-access-token': localStorage.getItem('token') },
                data: { ...dataForm },
                url: 'https://smartbudgetf.herokuapp.com/api/users/family',
            });

            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                setErrors({});
                window.location = '../success';
            }
        } catch (error) {
            return error.response.data;
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrors(isRequire((({ role, ...o }) => o)(dataForm), dataType));
        if (Object.keys(errors).length === 0) {
            let error = await onAddMember();
            setErrors(error);
        };
    }
    return (
        <>
            <Main>
                <section>
                    <Title>
                        <div></div>
                        <h1>ADD <span>MEMBER!</span></h1>
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
                            <Button type="submit">
                                Add Family Member
                            </Button>
                            <BottomNav />
                        </Form>
                    </WhiteBoard>
                </section>
            </Main>
        </>
    );
};
export default AddMember;