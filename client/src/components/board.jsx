import { styled } from '@mui/material/styles';
import button from '@mui/material/Button';
import familyImage from './images/family.png';
import successImg from './images/success.png';
import { Link } from 'react-router-dom';
import Select from 'react-select';
export const Title = styled('header')({
    '& div': {
        position: 'absolute',
        zIndex: -1,
        width: '360px',
        height: '271px',
        background: '#4A154C',
        transform: 'rotate(165deg)'
    },

    '& h1': {
        marginTop: "50px",
        fontFamily: "'Squada One', cursive",
        fontWeight: "700",
        fontSize: "60px",
        lineHeight: "42px",
        color: "#fff",
        '& span': {
            color: "#ECB22F"
        },
    }
});

export const Main = styled('main')({
    width: '100%',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
})

export const WhiteBoard = styled('section')({
    width: '390px',
    minHeight: "350px",
    background: "#fff",
    marginBottom: "40px",
    padding: "20px",
    borderRadius: "20px 20px 20px 20px",
});

export const Button = styled(button)(({ theme }) => ({
    fontSize: '14px',
    boxShadow: '0 0 6px hsl(210 14% 90%)',
    width: "90%",
    height: "60px",
    margin: "20px",
    fontFamily: 'Segoe UI',
    color: '#fff',
    background: theme.color ? theme.color : '#28D38A',
    borderRadius: '10px',
    ':hover': {
        backgroundColor: theme.hover ? theme.hover : '#ECB22F',
    },
}));

export const FamilyImage = styled('section')({
    backgroundImage: `url(${familyImage})`,
    backgroundRepeat: 'no-repeat',
    height: '195px',
    marginTop: '40px',
    marginLeft: '50PX'
});


export const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'orange',
    '&:focus, &:hover': {
        textDecoration: 'none',
        color: '#7790F6',
    }
}
);
export const SqButton = styled(button)(({ theme }) => ({
    flexDirection: "column",
    fontSize: '12px',
    boxShadow: '0 0 6px hsl(210 14% 90%)',
    width: "80px",
    height: "80px",
    margin: "20px",
    fontFamily: 'Segoe UI',
    color: '#fff',
    background: theme.color ? theme.color : '#28D38A',
    borderRadius: '10px',
    ':hover': {
        backgroundColor: theme.hover ? theme.hover : '#ECB22F',
    },
}));
export const SelectDroupDown = styled(Select)({
    '& .css-6j8wv5-Input': {
        padding: "14px",
    },
    '& .css-1s2u09g-control': {
        margin: "7px",
    }
});
export const SuccessImg = styled('div')({
    backgroundImage: `url(${successImg})`,
    backgroundRepeat: 'no-repeat',
    height: '195px'
});

export const ProgressStyle = styled('progress')({
    padding: '20px',
    marginTop: '10px',
    width: '150px'
});

export const FlexSection = styled('section')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '45px',
    width: '390px',
    paddingBottom: '30px',
});
export const H5styles = styled('h5')({
    fontFamily: 'Segoe UI',
    color: '#6441a4',
    marginTop: '20px',
});
