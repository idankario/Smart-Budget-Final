import Register from '../../component/register';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login/loginPage.css';
import axios from 'axios';

const RegisterPage = () => {
  let navigate = useNavigate();
  const [registerData, setForm] = useState({
    userName: '',
    role: '',
    budgetLimit: '',
    income: '',
    email: '',
    password: '',
  });

  const onSubmitForm = async () => {
    console.log(registerData)
    try {
      let res = await axios({
        method: 'post',
        url: 'http://localhost:8000/api/users/register',
        data: { ...registerData },
      })
      console.log(res.data)
      if (res.data.token) {
        localStorage.setItem('user', JSON.stringify(res.data));
        return navigate('/homepage')
      }
    } catch (error) {
      return error.response.data;
    }
  };

  const onFieldChange = (key, value) => {
    setForm({
      ...registerData,
      [key]: value,
    });
  };

  return (
    <>
      <section className="flexRow">
        <Register
          onFormSubmit={onSubmitForm}
          dataRegister={registerData}
          onChangeField={onFieldChange}
        />
      </section>
    </>
  );
};

export default RegisterPage;
