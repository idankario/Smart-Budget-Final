import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
export const ButtonOrange = styled(Button)({
  background: '#F86549',
  fontSize: '10px',
  marginBottom: "40px",
  boxShadow: "0 0 6px hsl(210 14% 90%)",
  padding:"10px",
  color: '#fff',  
  ':hover': {
    backgroundColor: '#F0B36A',
  },
});
export const Form =  styled('form')({
 
    display: 'flex',
    flexDirection: 'column',
    padding: '13px 40px',
    background: 'orange',
    opacity:0.9,
    borderRadius: '25px',
    marginTop: '90px',
    justifyContent: 'space-around',
    '& .MuiTextField-root': {
      width: '540px',
    },
    '& .MuiInputBase-input ': {
      background: '#F6F7FB',
    },
  },
);
