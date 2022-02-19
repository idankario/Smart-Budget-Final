import React from 'react';
import { Link } from 'react-router-dom'
import { Title, Main, WhiteBoard, FamilyImage, Button } from '../components/board';
import BottomNav from '../components/navigation/bottomNav';
const MenuPage = () => {
  return (
    <Main>
      <section>
        <Title>
          <div></div>
          <h1>SMART <span>Budget!</span></h1>
        </Title>
        <FamilyImage></FamilyImage>
        <WhiteBoard>
          <Button component={Link} to="/statistic" >
            STATISTIC
          </Button>
          <Button component={Link} to="/family" theme={{ color: '#7790F6' }} >
            FAMILY
          </Button>
          <Button component={Link} to="/expenses" >
            ADD EXPENSES
          </Button>
          <BottomNav />
        </WhiteBoard>
      </section>
    </Main>
  );
};
export default MenuPage;
