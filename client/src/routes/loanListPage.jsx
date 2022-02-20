import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Title, Main, WhiteBoard, FamilyImage, Button, CardStyle } from '../components/board';
import { Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BottomNav from '../components/navigation/bottomNav';
import axios from 'axios';
const LoanListPage = () => {
  const [askLoans, setAskLoans] = useState({});
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
      const fetchData = async () => {
          try {
              let res = await axios({
                  method: 'get',
                  headers: { 'x-access-token': localStorage.getItem('token') },
                  url: 'http://localhost:8000/api/users/loans',
              });
              if (res.data.token) {
                  localStorage.setItem('token', res.data.token);
                  const loans = await res.data.loans;
                  setAskLoans(loans);
              }
          } catch (error) {
              return error.response.data;
          }
      }
      fetchData();
  }, []);

  const sendAnswer = async (Answer) => {
    try {
      let res = await axios({
        method: 'PUT',
        headers: { 'x-access-token': localStorage.getItem('token') },
        url: 'http://localhost:8000/api/users/loans/:id',
        data: Answer,
      });
      if (res.data) {
        // console.log(res.data)
        // window.localStorage.clear();
        // window.location = '../'
      }
    } catch (error) {
      // console.log("Error")
    }
  };

  return (
    <Main>
      <section>
        <Title>
          <div></div>
          <h1>loan<span>List!</span></h1>
        </Title>
        <FamilyImage></FamilyImage>
        <WhiteBoard>
          <CardStyle >
            <Typography >
              jlljl
            </Typography>
            <Typography >
              Ask for 400$
            </Typography>
            <Button onClick={() => sendAnswer("true")} >
              <CheckIcon />
            </Button>
            <Button onClick={() => sendAnswer("false")} theme={{ color: '#ff0000' }} >
              <DeleteForeverIcon />
            </Button>
          </CardStyle>
          <Button component={Link} to="/family" >
            Back home!
          </Button>
        </WhiteBoard>
        <BottomNav />
      </section>
    </Main>
  );
};
export default LoanListPage;