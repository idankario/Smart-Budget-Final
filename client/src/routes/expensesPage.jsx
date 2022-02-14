import React, { useEffect, useState } from 'react';
import { SelectDroupDown, Title, Main, WhiteBoard, FamilyImage, Button } from '../components/board';
import Form from '../components/from';
import { isRequire } from '../components/util/validations';
import { MenuItem, TextField, Grid } from '@mui/material';
import Select from '@mui/material/Select';
import axios from 'axios';
const ExpensesPage = () => {
  const [errors, setErrors] = useState({});
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
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState('ils');
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
    useEffect(() => {
    async function fetchData() {
      try {
        axios.get('http://localhost:8000/api/users/', { headers: { 'x-access-token': localStorage.getItem('token') } }) 
        .then((res) => {
          console.log(res.data);
        })
        .catch(function (error) {
          console.log("Error while fetching market updates");
        });  
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  const onChangeField = (key, value) => {
    setDataForm({
      ...dataForm,
      [key]: value,
    });
  };

  const onAddExpenses = async () => {
    try {
      axios.get('http://localhost:8000/api/users/', { headers: { 'x-access-token': localStorage.getItem('token') } }) 
      .then((res) => {
        console.log("res.data");
      })
      .catch( (error)=> {
        console.log("Error while fetching market updates");
      });  
    } catch (error) {
      console.log(error)
    }

  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errorsList=await isRequire((({ methodsPayment, category, ...o }) => o)(dataForm), dataType);
    setErrors(errorsList);
    if (Object.keys(errorsList).length === 0) {
      let error = await onAddExpenses();
      setErrors(error);
    };
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
              <h5>{errors?errors[`descritpion`]:''}</h5>
              <label>Cost</label>
              <Grid container>
                <Grid item xs={9}>
                  <TextField
                    name="cost"
                    label="Cost"
                    variant="outlined"
                    type={"Number"}
                    value={dataForm.cost}
                    onChange={(e) => {
                      onChangeField("cost", e.target.value)
                    }}
                  />
                  <h5>{errors?errors[`cost`]:''}</h5>
                </Grid>
                <Grid item xs={3} >
                  <SelectDroupDown options={currencies}
                    placeholder={'ils'} />
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
                <MenuItem value="Car">Car</MenuItem>
                <MenuItem value="Home">Home</MenuItem>
                <MenuItem value="Vecation">Vecation</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
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
