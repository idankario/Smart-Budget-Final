import React from 'react';
import { Link } from 'react-router-dom'
import { Title, Main, WhiteBoard, FamilyImage, Button } from '../components/board';
import Divider from '@mui/material/Divider';
import BottomNav from '../components/navigation/bottomNav';
import axios from 'axios';
const AccountPage = () => {  
  const deleteAcount = async () => {
    try {
      let res = await axios({
        method: 'DELETE',
        headers: { 'x-access-token': localStorage.getItem('token') },
        url: 'https://thesmartbudget.herokuapp.com/api/api/users/',
      });
      if (res.data) {
        window.localStorage.clear();
        window.location = '../'
      }
    } catch (error) {
      console.log("Error")
    }
  };

  return (
    <Main>
      <section>
        <Title>
          <div></div>
          <h1>EDIT <span>ACCOUNT!</span></h1>
        </Title>
        <FamilyImage></FamilyImage>
        <WhiteBoard>
          <Button component={Link} to="/update" >
            Update Account!
          </Button>
          <Button onClick={deleteAcount} theme={{ color: '#7790F6' }} >
            Delete Account!
          </Button>
          <Divider>or</Divider>
          <Button component={Link} to="/loanList"  >
            Loan list from family
          </Button>
          <BottomNav />
        </WhiteBoard>
      </section>
    </Main>
  );
};
export default AccountPage;
