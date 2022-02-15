import React from 'react';
import { Link } from 'react-router-dom'
import { Title, Main, WhiteBoard, FamilyImage, Button } from '../components/board';
import Divider from '@mui/material/Divider';

const HomePage = () => {
  return (
    <>
      <Main>
        <section>
          <Title>
            <div></div>
            <h1>SMART <span>Budget!</span></h1>
          </Title>
          <FamilyImage></FamilyImage>
          <WhiteBoard>
            <Button component={Link} to="/register" >
              Sign up!
            </Button>
            <Divider>or</Divider>
            <Button component={Link} to="/login" theme={{ color: '#7790F6' }} >
              Already have an account? Log In
            </Button>
          </WhiteBoard>
        </section>
      </Main>
    </>
  );
};
export default HomePage;
