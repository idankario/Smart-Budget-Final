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
  const [usersAsk, setUsersAsk] = useState({});
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
          const askUsers = await res.data.askUsers;
          const usersAsk = await res.data.usersAsk;
          setAskLoans(askUsers);
          setUsersAsk(usersAsk);
        }
      } catch (error) {
        return error.response.data;
      }
    }
    fetchData();
  }, []);

  const sendAnswer = async (Answer,id) => {
    try {
      let res = await axios({
        method: 'PUT',
        headers: { 'x-access-token': localStorage.getItem('token') },
        url: 'http://localhost:8000/api/users/loans/',
        data: Answer,text,
      });
      if (res.data) {
        window.location = '../expenses'
      }
    } catch (error) {
     
    }
  };
  const eachUsersAsk = (data,i) => {
    const { descritpion, isAprove } = data[1];
    return (
      <CardStyle key={i} >
        <Typography >
          {descritpion}
        </Typography>
        <Typography >
          {`Status: ${isAprove}`}
        </Typography>
      </CardStyle>
    );
  }
 
  const getButton=(id)=>{
    return (
      <>
      <Button onClick={() => sendAnswer("true",id)} >
      <CheckIcon />
    </Button>
    <Button onClick={() => sendAnswer("false")} theme={{ color: '#ff0000' }} >
      <DeleteForeverIcon />
    </Button> 
    </>
    );
  }

  const eachAskUsers = (data,i) => {
    const { descritpion, loan,id,isAprove } = data[1];
    return (
      <CardStyle key={i}>
        <Typography >
          {descritpion}
        </Typography>
        <Typography >
        {isAprove ?  isAprove:  getButton(id)}
          {`Ask for ${loan}`}
        </Typography>
        {usersAsk ? "":""}
      </CardStyle>
    );
  }
  return (
    <Main>
      <section>
        <Title>
          <div></div>
          <h1>loan<span>List!</span></h1>
        </Title>
        <FamilyImage></FamilyImage>
        <WhiteBoard>
        <h1>{askLoans ? "Wait for Your Approve ": ''}</h1>
          {Object.entries(usersAsk).map(eachAskUsers)}
          <h1>{usersAsk ? "Wait for Approve ": ''}</h1>
          {Object.entries(usersAsk).map(eachUsersAsk)}
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