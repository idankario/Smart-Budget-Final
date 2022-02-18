import React from 'react';
import { Link } from 'react-router-dom'
import { Title, Main, WhiteBoard, FamilyImage, Button } from '../components/board';
import Divider from '@mui/material/Divider';
import BottomNav from '../components/navigation/bottomNav';

const AccountPage = () => {
  return (
    <>
      <Main>
        <section>
          <Title>
            <div></div>
            <h1>EDIT <span>ACCOUNT!</span></h1>
          </Title>
          <FamilyImage></FamilyImage>
          <WhiteBoard>
            <Button component={Link} to="/register" >
              Update Account!
            </Button>
            <Button component={Link} to="/login" theme={{ color: '#7790F6' }} >
              Delete Account!
            </Button>
            <Divider>or</Divider>
            <Button component={Link} to="/family"  >
              Back To Your Family!
            </Button>
            <BottomNav />
          </WhiteBoard>
        </section>
      </Main>
    </>
  );
};
export default AccountPage;
