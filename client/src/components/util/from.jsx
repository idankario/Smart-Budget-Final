import { styled } from '@mui/material/styles';

export const Title = styled('form')({
    '& div': {
        position: 'absolute',
        zIndex: -1,
        width: '360px',
        height: '271px',
        background: '#4A154C',
        transform: 'rotate(165deg)'
    },
    '& h1': {
        marginTop:"50px",
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

