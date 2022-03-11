/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import axios from 'axios';
import {
  Title,
  Main,
  WhiteBoard,
  FamilyImage,
  Button,
} from '../components/board';
import Form from '../components/from';
import isRequire from '../components/util/validations';
import BottomNav from '../components/navigation/bottomNav';

function AddMember() {
  const [errors, setErrors] = useState({});
  const [dataForm, setDataForm] = useState({
    fullName: '',
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
    { type: 'password', label: 'Password' },
  ];

  const onChangeField = (key, value) => {
    setDataForm({
      ...dataForm,
      [key]: value,
    });
  };

  const onAddMember = async () => {
    try {
      const res = await axios({
        method: 'POST',
        headers: { 'x-access-token': localStorage.getItem('token') },
        data: { ...dataForm },
        url: 'https://thesmartbudget.herokuapp.com/api/users/family',
      });

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        setErrors({});
        window.location = '../success';
      }
    } catch (error) {
      //   return error.response.data;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const objectErrors = await isRequire(
      (({ role, ...o }) => o)(dataForm),
      dataType
    );
    setErrors(objectErrors);
    if (Object.keys(objectErrors).length === 0) {
      const error = await onAddMember();
      setErrors(error);
    }
  };
  return (
    <Main>
      <section>
        <Title>
          <div />
          <h1>
            ADD <span>MEMBER!</span>
          </h1>
        </Title>
        <FamilyImage />
        <WhiteBoard>
          <Form
            formData={(({ role, ...o }) => o)(dataForm)}
            typeData={dataType}
            onFieldChange={onChangeField}
            errorsForm={errors}
            onSubmit={onSubmit}
          >
            <label>Your Role</label>
            <Select
              value={dataForm.role}
              label="Your Role"
              onChange={(e) => {
                onChangeField('role', e.target.value);
              }}
            >
              <MenuItem value="Parent">Parent</MenuItem>
              <MenuItem value="Child">Child</MenuItem>
            </Select>
            <Button type="submit">Add Family Member</Button>
            <BottomNav />
          </Form>
        </WhiteBoard>
      </section>
    </Main>
  );
}
export default AddMember;
