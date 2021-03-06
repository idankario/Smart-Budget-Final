import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import {
  Title,
  Main,
  WhiteBoard,
  FamilyImage,
  Button,
  SqButton,
} from '../components/board';
import BottomNav from '../components/navigation/bottomNav';
import iconsUsers from '../components/util/iconsUser';

function FamilyPage() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: 'get',
          headers: { 'x-access-token': localStorage.getItem('token') },
          url: 'https://thesmartbudget.herokuapp.com/api/users/',
        });
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          setUsers((({ token, ...o }) => o)(res.data));
        }
      } catch (error) {
        // error
      }
    };
    fetchData();
  }, []);

  const eachButtonFamily = (user, index) => (
    <SqButton
      component={Link}
      to={`/leon/${user[1].email}`}
      key={index}
      theme={{ color: '#7790F6' }}
    >
      <img
        src={iconsUsers(index)}
        alt={user[1].fullName}
        title={user[1].fullName}
      />
      <p style={{ color: 'black', fontSize: '8px' }}>{user[1].fullName}</p>
    </SqButton>
  );
  const Results = React.useCallback(
    () => (
      <SqButton component={Link} to="/addMember">
        <AddIcon />
      </SqButton>
    ),
    []
  );

  return (
    <Main>
      <section>
        <Title>
          <div />
          <h1>
            MY <span>FAMILY!</span>
          </h1>
        </Title>
        <FamilyImage />
        <WhiteBoard>
          <h2
            style={{
              fontFamily: "'Squada One', cursive",
              fontWeight: '700',
              fontSize: '30px',
              color: '#ECB22F',
            }}
          >
            {JSON.parse(localStorage.getItem('user')).fullName} Family
          </h2>
          <h5>Ask For Loan:</h5>
          {Object.entries(users).map(eachButtonFamily)}
          {JSON.parse(localStorage.getItem('user')).role === 'Parent' ? (
            <Results />
          ) : null}
          <Button component={Link} to="/menu">
            BackHome!
          </Button>
          <BottomNav />
        </WhiteBoard>
      </section>
    </Main>
  );
}
export default FamilyPage;
