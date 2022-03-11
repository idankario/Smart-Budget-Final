import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import {
  Title,
  Main,
  WhiteBoard,
  FamilyImage,
  Button,
} from '../components/board';

function HomePage() {
  return (
    <Main>
      <section>
        <Title>
          <div />
          <h1>
            SMART <span>Budget!</span>
          </h1>
        </Title>
        <FamilyImage />
        <WhiteBoard>
          <Button component={Link} to="/register">
            Sign up!
          </Button>
          <Divider>or</Divider>
          <Button component={Link} to="/login" theme={{ color: '#7790F6' }}>
            Already have an account? Log In
          </Button>
        </WhiteBoard>
      </section>
    </Main>
  );
}
export default HomePage;
