import { makeStyles } from '@material-ui/core';
import React from 'react';

const FlexForm=()=>{
    const useStyles = makeStyles(() => ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          padding: '13px 40px',
          background: '#fff',
          borderRadius: '25px',
          marginTop: '90px',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          justifyContent: 'space-around',
          '& .MuiTextField-root': {
            width: '540px',
          },
          '& .MuiInputBase-input ': {
            background: '#F6F7FB',
          },
        },
      }));
    const classes = useStyles();
  return(<form className={classes.root}>
      
  </form>)
}
export default FlexForm;