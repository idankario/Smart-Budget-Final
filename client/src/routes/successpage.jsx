import React from 'react';
import { Link } from 'react-router-dom'
import { Title, Main, SuccessImg, Button, } from '../components/board';
const SucssesPage = () => {
  return (
    <Main>
      <section>
        <Title style={{ marginTop: '150px' }}>
          <h1>ADD<span>SUCCESS!</span></h1>
          <div></div>
        </Title>
        <SuccessImg style={{ marginLeft: '100px', marginTop: '80px' }}></SuccessImg>
        <Button component={Link} to="/family" >
          GO TO YOUR FAMILY :)!
        </Button>
      </section>
    </Main>
  );
};
export default SucssesPage;