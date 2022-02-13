import React, {  useState } from 'react';

import { Paper,  BottomNavigation, BottomNavigationAction } from '@mui/material';
import { sidebarConfig } from './sidebarConfig';

import { Link } from 'react-router-dom';


const BottomNav = () => {
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
export default BottomNav;
