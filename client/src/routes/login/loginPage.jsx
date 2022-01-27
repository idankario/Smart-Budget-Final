import Login from '../../component/login';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';
import axios from 'axios';

const LoginPage = () => {
  let navigate = useNavigate();
  
  const [formData, setForm] = useState({
    userName: '',
    email: '',
    password: '',
  });

   const  onSubmitForm = async () => {
     console.log(formData)
     const response = await axios({
      method: 'post',
      url: 'http://localhost:8000/login',
      data: {...formData},
    })

      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', response.data.token);
        navigate('/homepage')
      }     
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
          formData={formData}
          onChangeField={onFieldChange}

        />
      </section>
    </>
  );
};

export default LoginPage;
