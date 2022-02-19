import React, { useEffect, useState } from 'react';
import { SelectDroupDown, Title, Main, WhiteBoard, FamilyImage, Button } from '../components/board';
import Form from '../components/from';
import { isRequire } from '../components/util/validations';
import BottomNav from '../components/navigation/bottomNav';
import { MenuItem, TextField, Grid } from '@mui/material';
import Select from '@mui/material/Select';
import axios from 'axios';

const ExpensesPage = () => {
  const [errors, setErrors] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState('ils');
  const [selectedCurrency, setSelectCurrency] = useState({ value: '1', label: 'ils' });
  const [dataCost, setDataCost] = useState('');
  const [dataForm, setDataForm] = useState({
    descritpion: '',
    cost: '',
    methodsPayment: 'Cash',
    category: 'Home',
  });

  const dataType = [
    { type: 'text', label: 'Descritpion' },
    { type: 'number', label: 'Cost' },
  ];

  // Calling the api whenever the dependency changes
  useEffect(() => {
    axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      const currency = [];
      Object.entries(res.data[from]).map(([k, v]) => currency.push({ value: `${v}`, label: k }));
      setCurrencies(currency);
      setFrom(from);
    });
  }, [from]);

  const onAddExpenses = async () => {
    try {
      let res = await axios({
        method: 'POST',
        headers: { 'x-access-token': localStorage.getItem('token') },
        data: { ...dataForm },
        url: 'http://localhost:8000/api/users/expenses',
      });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        setErrors({});
        window.location = '../statistic'
      }
    } catch (error) {
      return error.response.data;
    }
  };

  useEffect(() => {
    if (dataForm.cost > 0) {
      const fetchData = async () => {
        const objectErrors = await isRequire((({ methodsPayment, category, ...o }) => o)(dataForm), dataType);
        setErrors(objectErrors);
        if (Object.keys(errors).length === 0) {
          let error = await onAddExpenses();
          setErrors(error);
        };
      }
      fetchData();
    }
    // eslint-disable-next-line
  }, [dataForm.cost]);

  const onChangeField = (key, value) => {
    setDataForm({
      ...dataForm,
      [key]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (dataCost > 0) {
      setDataForm({
        ...dataForm,
        "cost": dataCost > 0 ? (dataCost / selectedCurrency.value).toFixed(0) : '',
      });
    }
    else {
      const objectErrors = await isRequire((({ methodsPayment, category, ...o }) => o)(dataForm), dataType);
      setErrors(objectErrors);
    }
  }

  return (
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
                onChangeField("descritpion", e.target.value);
              }}
            />
            <h5>{errors ? errors[`descritpion`] : ''}</h5>
            <label>Cost</label>
            <Grid container>
              <Grid item xs={9}>
                <TextField
                  name="cost"
                  label="Cost"
                  variant="outlined"
                  type={"Number"}
                  value={dataCost}
                  onChange={(e) => {
                    setDataCost(e.target.value);
                  }}
                />
                <h5>{errors ? errors[`cost`] : ''}</h5>
              </Grid>
              <Grid item xs={3} >
                <SelectDroupDown
                  options={currencies}
                  value={selectedCurrency}
                  placeholder={selectedCurrency}
                  onChange={setSelectCurrency} />
              </Grid>
            </Grid>
            <label>Methods of Payment</label>
            <Select
              value={dataForm.methodsPayment}
              label="Methods of Payment"
              onChange={(e) => {
                onChangeField("methodsPayment", e.target.value)
              }}
            >
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="CreditCard">Credit Card</MenuItem>
            </Select>

            <label>Category</label>
            <Select
              value={dataForm.category}
              label="Category"
              onChange={(e) => {
                onChangeField("category", e.target.value)
              }}
            >
              <MenuItem value="Public transport">Public transport</MenuItem>
              <MenuItem value="Entertainment">Entertainment</MenuItem>
              <MenuItem value="Home">Home</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            <Button type="submit">
              Add expenses
            </Button>
            <BottomNav />
          </Form>
        </WhiteBoard>
      </section>
    </Main>
  );
};
export default ExpensesPage;