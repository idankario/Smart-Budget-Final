import React, { useEffect, useState } from 'react';
import { Title, Main, WhiteBoard, FamilyImage, Button } from '../components/board';
import Form from '../components/from';
import { isRequire } from '../components/util/validations';
import { MenuItem, TextField, Grid } from '@mui/material';
import Selectmui from '@mui/material/Select';
import Select from 'react-select';
import axios from 'axios';
const ExpensesPage = () => {
  const [errors, setErrors] = useState({});
  const [dataForm, setDataForm] = useState({
    descritpion: '',
    value: '',
    methodsPayment: 'Cash',
    category: 'Home',
  });
  const [to, setTo] = useState('ils');
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState('usd');
  // Calling the api whenever the dependency changes
  useEffect(() => {
    axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      const currency = [];
      Object.entries(res.data[from]).map(([k, v]) => currency.push({ value: `${v}`, label: k }));
      setCurrencies(currency);
    });
  }, [from]);



  const dataType = [
    { type: 'text', label: 'Descritpion' },
    { type: 'number', label: 'Value' },
  ];
  const onChangeField = (key, value) => {
    setDataForm({
      ...dataForm,
      [key]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(Object.entries(dataForm)[0])

    // setErrors(isRequire((({ role, ...o }) => o)(dataForm.descritpion), dataType));
    // if (Object.keys(errors).length === 0) {
    //   // let error = await onRegister();
    //   // setErrors(error);
    // };
  }
  return (
    <>
      <Main>
        <section>
          <Title>
            <div></div>
            <h1>ADD <span>EXPENSES!</span></h1>
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
              <h5>{errors[`descritpion`]}</h5>
              <label>Value</label>
              <Grid container>
                <Grid item xs={8}>
                  <TextField
                    name="value"
                    label="Value"
                    variant="outlined"
                    type={"Number"}
                    value={dataForm.value}
                    onChange={(e) => {
                      onChangeField("value", e.target.value)
                    }}
                  />
                  <h5>{errors[`value`]}</h5>
                </Grid>

                <Grid item xs={3} >
                  <Select options={currencies}
                    placeholder={from} />
                </Grid>
              </Grid>
              <label>Methods of Payment</label>

              <Selectmui
                value={dataForm.methodsPayment}
                label="Methods of Payment"
                onChange={(e) => {
                  onChangeField("methodsPayment", e.target.value)
                }}
              >
                <MenuItem value="Cash">Cash</MenuItem>
                <MenuItem value="CreditCard">Credit Card</MenuItem>
              </Selectmui>

              <label>Category</label>
              <Selectmui
                value={dataForm.category}
                label="Category"
                onChange={(e) => {
                  onChangeField("category", e.target.value)
                }}
              >
                <MenuItem value="Car">Car</MenuItem>
                <MenuItem value="Home">Home</MenuItem>
                <MenuItem value="Vecation">Vecation</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Selectmui>

              <Button type="submit">
                Add expenses
              </Button>

            </Form>
          </WhiteBoard>
        </section>
      </Main>
    </>
  );
};
export default ExpensesPage;
