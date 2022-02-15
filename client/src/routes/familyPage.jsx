import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Title, Main, WhiteBoard, FamilyImage, Button, SqButton } from '../components/board';
import BottomNav from '../components/navigation/bottomNav';
import AddIcon from '@mui/icons-material/Add';
import iconsUsers from '../components/util/iconsUser';
import axios from 'axios';
const FamilyPage = () => {
  const [users, setUsers] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios({
          method: 'get',
          headers: { 'x-access-token': localStorage.getItem('token') },
          url: 'http://localhost:8000/api/users/',
        });
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          setUsers((({ token, ...o }) => o)(res.data));
        }
      } catch (error) {
        return error.response.data;
      }
    }
    fetchData()
  }, []);
  const eachButtonFamily = (user, index) => {
    return (
      <SqButton key={index} theme={{ color: '#7790F6' }}>
        <img src={iconsUsers(index)} alt={user.fullName} title={user.fullName} />
        <p>{user[1].fullName}</p>
      </SqButton>
    );
  }
  const Results = () => (
    <SqButton component={Link} to="/addMember" >
          <AddIcon />
        </SqButton>
  )
 
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
            <h2>{JSON.parse(localStorage.getItem('user')).fullName} Family</h2>
            <h5>Ask For Loan:</h5>
            {Object.entries(users).map(eachButtonFamily)}
           
           { (JSON.parse(localStorage.getItem('user')).role === "Parent") ?  <Results /> : null }
            <Button component={Link} to="/menu" >
              BackHome!
            </Button>
            <BottomNav />
          </WhiteBoard>
        </section>
      </Main>
    </>
  );
};


export default FamilyPage;