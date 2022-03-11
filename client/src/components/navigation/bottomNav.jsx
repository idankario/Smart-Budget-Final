import React, { useState, useEffect } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom';
import sidebarConfig from './sidebarConfig';

function BottomNav() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    sidebarConfig.map((navigation, index) =>
      window.location.pathname === navigation.path ? setValue(index) : ''
    );
  }, []);

  const eachBottomNavigatio = (navigation, index) => (
    <BottomNavigationAction
      component={Link}
      to={navigation.path}
      key={index}
      sx={{ color: '#fff' }}
      icon={navigation.icon}
      label={navigation.title}
    />
  );

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        sx={{ backgroundColor: '#331A3F' }}
        showLabels
        value={value}
      >
        {sidebarConfig.map(eachBottomNavigatio)}
      </BottomNavigation>
    </Paper>
  );
}
export default BottomNav;
