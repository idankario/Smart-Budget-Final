import React, { useState } from 'react';
import { Title, Main, WhiteBoard, FamilyImage, Button } from '../components/board';
import Form from '../components/from';
import { isRequire } from '../components/util/validations';
import BottomNav from '../components/navigation/bottomNav';
import { TextField, Grid } from '@mui/material';
import axios from 'axios';
const AskPage = () => {
  const [errors, setErrors] = useState({});
  const [dataForm, setDataForm] = useState({
    descritpion: '',
    loan: '',
  });

  const dataType = [
    { type: 'text', label: 'Descritpion' },
    { type: 'number', label: 'Loan' },
  ];

  const onChangeField = (key, value) => {
    setDataForm({
      ...dataForm,
      [key]: value,
    });
  };
  const onAskloan = async () => {
    try {
      let res = await axios({
        method: 'POST',
        headers: { 'x-access-token': localStorage.getItem('token') },
        data: { ...dataForm },
        url: 'https://smartbudgetf.herokuapp.com/api/users/loan',
      });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        setErrors({});
        window.location = '../family'
      }
    } catch (error) {
      return error.response.data;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errorsList = await isRequire((({ loan, descritpion, ...o }) => o)(dataForm), dataType);
    setErrors(errorsList);
    if (Object.keys(errorsList).length === 0) {
      let error = await onAskloan();
      setErrors(error);
    };
  }
  return (
    <>
      <Main>
        <section>
          <Title>
            <div></div>
            <h1>Ask <span>Loan!</span></h1>
          </Title>
          <FamilyImage></FamilyImage>
          <WhiteBoard>
            <Form
              formData={''}
              typeData={''}
              onFieldChange={onChangeField}
              errorsForm={errors}
              onSubmit={onSubmit}>
              <label>Descritpion</label>
              <TextField
                name="descritpion"
                label="Descritpion"
                variant="outlined"
                type="text"
                value={dataForm.descritpion}
                onChange={(e) => {
                  onChangeField("descritpion", e.target.value)
                }}
              />
              <h5>{errors ? errors[`descritpion`] : ''}</h5>
              <label>Loan</label>
              <Grid container>
                <Grid item xs={9}>
                  <TextField
                    name="loan"
                    label="Loan"
                    variant="outlined"
                    type={"Number"}
                    value={dataForm.loan}
                    onChange={(e) => {
                      onChangeField("loan", e.target.value)
                    }}
                  />
                  <h5>{errors ? errors[`loan`] : ''}</h5>
                </Grid>
            </Grid>
              <Button type="submit">
                Send appliction!
              </Button>
              <BottomNav />
            </Form>
          </WhiteBoard>
        </section>
      </Main>
    </>
  );
};
export default AskPage;
