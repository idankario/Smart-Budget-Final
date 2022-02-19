import React from 'react';
import { Link } from 'react-router-dom'
import { Title, Main, WhiteBoard, FamilyImage, Button } from '../components/board';
import { Card, Typography, CardContent } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BottomNav from '../components/navigation/bottomNav';
import axios from 'axios';

const LoanListPage = () => {
  const sendAnswer = async (Answer) => {
    try {
      let res = await axios({
        method: 'PUT',
        headers: { 'x-access-token': localStorage.getItem('token') },
        url: 'http://localhost:8000/api/users/loans/:id',
        data: Answer,
      });
      if (res.data) {
        console.log(res.data)
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
          <h1>loan<span>List!</span></h1>
        </Title>
        <FamilyImage></FamilyImage>
        <WhiteBoard>
        <div style={{ paddingBottom: "30px" }}>
        <Card sx={{ width: 400, height: 130, borderRadius: "21px", backgroundColor: '#884EA0' }}>
          <CardContent>
            <Typography align='left' sx={{ paddingLeft: "30px", paddingBottom: "10px", fontWeight: 700, fontSize: "38px", lineHeight: "20px", color: "#ECB22F", fontFamily: "cursive" }}>
              jlljl
            </Typography>
            <Typography align='left' sx={{ paddingLeft: "140px", fontWeight: 700, fontSize: "20px", lineHeight: "127.7%", color: "#ECB22F", opacity: 0.8, fontFamily: "cursive" }}>
              Ask for 400$
            </Typography>
            <span>
              <Button onClick={sendAnswer("true")}sx={{ width: "1px", height: "30px" }}><CheckIcon /></Button>
              <Button onClick={sendAnswer("false")}theme={{ color: '#ff0000' }}  sx={{ width: "10px", height: "30px" }} ><DeleteForeverIcon /></Button>
            </span>
          </CardContent>
        </Card>
      </div>

      
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