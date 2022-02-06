import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import familyImage from '../../images/family.svg';
export const ButtonOrange = styled(Button)({
  background: '#F86549',
  fontSize: '20px',
  boxShadow: '0 0 6px hsl(210 14% 90%)',
  padding: '10px',
  color: '#fff',
  marginRight: '20px',
  ':hover': {
    backgroundColor: '#F0B36A',
  },
});

export const Form = styled('form')({
  display: 'flex',
  borderRadius: '25px',
  flexDirection: 'column',
  padding: '13px 30px',
  background: 'orange',
  background: '-webkit-linear-gradient(left, #66a3c7, #552b8b)',
  borderRadius: '25px',
  marginTop: '150px',
  justifyContent: 'space-around',
  '& .MuiTextField-root': {
    margin: '5px',
    width: '450px',
  },
  '.familyForm': {
    backgroundPosition: 'center',
    backgroundImage: `url(${familyImage})`,
    backgroundRepeat: 'no-repeat',
    height: '200px',
    marginTop: '-20px',
  }
},
);
export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'orange',
  '&:focus, &:hover': {
    textDecoration: 'none',
    color: '#fff',
  }
}
);
