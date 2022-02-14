import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Title, Main, WhiteBoard, FamilyImage, Button, SqButton } from '../components/board';
import BottomNav from '../components/navigation/bottomNav';
import AddIcon from '@mui/icons-material/Add';
import icon from '../components/images/1.png';
import axios from 'axios';
const AddFamily = () => {
  const [users, setUsers] = useState({});
  useEffect(() => {
     const fetchMyAPI = async() => {
      try {
        let res = await axios({
          method: 'get',
          headers: { 'x-access-token': localStorage.getItem('token') },
          url: 'http://localhost:8000/api/users/',
        });
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          setUsers(res.data)
          
          console.log(res.data)
        }
      } catch (error) {
        return error.response.data;
      }

    }
    fetchMyAPI()
    console.log(users)
  }, []);

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
            <SqButton theme={{ color: '#7790F6' }}>
              <img src={icon} />
              <p>idankario</p>
            </SqButton>
            <SqButton component={Link} to="/addMember" >
              <AddIcon />
            </SqButton>
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
export default AddFamily;