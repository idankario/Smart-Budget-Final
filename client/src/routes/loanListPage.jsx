import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import BottomNav from '../components/navigation/bottomNav';
import {
  Title,
  Main,
  WhiteBoard,
  FamilyImage,
  Button,
  CardStyle,
} from '../components/board';

function LoanListPage() {
  const [loansAsk, setAskLoans] = useState({});
  const [usersAsk, setUsersAsk] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: 'get',
          headers: { 'x-access-token': localStorage.getItem('token') },
          url: 'https://thesmartbudget.herokuapp.com/api/users/loans',
        });
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          const askUsers = await res.data.askUsers;
          const askLoans = await res.data.askLoans;
          setAskLoans(askLoans);
          setUsersAsk(askUsers);
        }
      } catch (error) {
        // empty
      }
    };
    fetchData();
  }, []);

  const sendAnswer = async (Answer, id) => {
    try {
      const res = await axios({
        method: 'PUT',
        headers: { 'x-access-token': localStorage.getItem('token') },
        url: 'https://thesmartbudget.herokuapp.com/api/users/loans/',
        data: Answer,
        id,
      });
      if (res.data) {
        window.location = '../expenses';
      }
    } catch (error) {
      // empty
    }
  };
  const eachUsersAsk = (data, i) => {
    const { descritpion, isAprove } = data[1];
    return (
      <CardStyle key={i}>
        <Typography>{descritpion}</Typography>
        <Typography>{`Status: ${isAprove}`}</Typography>
      </CardStyle>
    );
  };

  const getButton = (id) => (
    <>
      <Button onClick={() => sendAnswer('true', id)}>
        <CheckIcon />
      </Button>
      <Button onClick={() => sendAnswer('false')} theme={{ color: '#ff0000' }}>
        <DeleteForeverIcon />
      </Button>
    </>
  );

  const eachAskUsers = (data, i) => {
    const { descritpion, loan, id, isAprove } = data[1];
    return (
      <CardStyle key={i}>
        <Typography>{descritpion}</Typography>
        <Typography>
          {isAprove || getButton(id)}
          {`Ask for ${loan}`}
        </Typography>
        {usersAsk ? '' : ''}
      </CardStyle>
    );
  };
  return (
    <Main>
      <section>
        <Title>
          <div />
          <h1>
            loan<span>List!</span>
          </h1>
        </Title>
        <FamilyImage />
        <WhiteBoard>
          <h1>{loansAsk ? 'Wait for Your Approve ' : ''}</h1>
          {Object.entries(usersAsk).map(eachAskUsers)}
          <h1>{usersAsk ? 'Wait for Approve ' : ''}</h1>
          {Object.entries(usersAsk).map(eachUsersAsk)}
          <Button component={Link} to="/family">
            Back home!
          </Button>
        </WhiteBoard>
        <BottomNav />
      </section>
    </Main>
  );
}
export default LoanListPage;
