import Login from '../../component/login';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';
import axios from 'axios';

const LoginPage = () => {
  let navigate = useNavigate();
  const [isEdit, setEdit] = useState(-1);
  const [formData, setForm] = useState({
    userName: '',
    email: '',
    password: '',
  });

   const  onSubmitForm = async (email, password) => {
    const Data = {
      email: email,
      password: password,
    };

     const response = await axios({
      method: 'post',
      url: 'http://localhost:8000/login',
      data: Data,
    })

      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', response.data.token);

        console.log(response.data);
      }

      navigate('/homepage')
    // .post("http://localhost:3000/login", formData)
  };

  const onClickCancel = () => {
    setEdit(-1);
  };

  const onFieldChange = (key, value) => {
    setForm({
      ...formData,
      [key]: value,
    });
  };

  return (
    <>
      <section className="flexRow">
        <Login
          onSubmitForm={onSubmitForm}
          isEdit={isEdit}
          formData={formData}
          onChangeField={onFieldChange}
          onClickCancel={onClickCancel}
        />
      </section>
    </>
  );
};

export default LoginPage;
