import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, Grid, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { sidebarConfig } from './SidebarConfig';
import { ButtonOrange } from '../../component/util/buttonOrange';
import imageFamily from '../../images/family.svg';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [value, setValue] = useState(0);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       axios.get('http://localhost:8000/api/users', { headers: { 'x-access-token': localStorage.getItem('token') } }) 
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch(function (error) {
  //         console.log("Error while fetching market updates");
  //       });  
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData();
  // }, []);
  return (
    <>
      <section style={{ maxWidth: "400px", padding: "20px", margin: "auto", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}  >
        <img src={imageFamily} alt="imageFamily" />
        {sidebarConfig.map((navigation) => (
          <ButtonOrange key={navigation.title} sx={{ width: '100%' }}>
            <Grid item sm={1}>
              {navigation.icon}
            </Grid>
            <Grid item sm={8}>
              <h2>{navigation.title} </h2>
            </Grid>
          </ButtonOrange>
        ))}
      </section>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} >
        <BottomNavigation
          sx={{ backgroundColor: '#331A3F' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {sidebarConfig.map((navigation) => (
            <BottomNavigationAction
              component={Link}
              to={navigation.path}
              key={navigation.title}
              sx={{ color: "#fff" }}
              icon={navigation.icon}
              label={navigation.title} >
            </BottomNavigationAction>
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
};
export default HomePage;
