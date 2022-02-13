import React from 'react';
import { Link } from 'react-router-dom'
import { Title, Main, WhiteBoard, FamilyImage, Button,SqButton } from '../components/board';
import BottomNav from '../components/navigation/bottomNav';
// import {BsPlusLg} from 'react-icons/bs'
//BsPlusLg
import icon from '../components/images/1.png';
const AddFamily = () => {
  return (
    <>
      <Main>
        <section>
          <Title>
            <div></div>
            <h1>MY <span>FAMILY!</span></h1>

          </Title>
          <FamilyImage></FamilyImage>
          <WhiteBoard>
            <h2>Family Name</h2>
            <h5>Ask For Loan:</h5>

          <SqButton theme={{color:'#7790F6'}}>
          <img src={icon}/>
          <p>idankario</p>
          
          </SqButton>
          <SqButton >
            {/* <BsPlusLg /> */}
          </SqButton>
          
            <Button component={Link} to="/menu" >
            BackHome!
            </Button>
            <BottomNav/>
          </WhiteBoard>
        </section>
      </Main>
    </>
  );
};
export default AddFamily;