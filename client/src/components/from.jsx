import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { Fragment } from 'react';

export const FormStyle = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  textAlign: "left",
  fontSize: "15px",
  'a': {
    fontSize: "20px",
  },
  'p': {
    fontSize: "12px",
    'a': {
      fontSize: "12px",
    },
  },

  '& .MuiTextField-root': {
    margin: '5px',
  },
  '& h5': {
    color: "#F00", 
    margin: "0px",
  },
},
);

const Form = ({ formData, typeData, onFieldChange,errorsForm,onSubmit,children }) => {
  const eachTextField = (data, i) => {
    const { type, label } = typeData[i];
    return (
     <Fragment key={i}>
        <label>{label}</label>
        <TextField
          name={data[0]}
          label={label}
          variant="outlined"
          type={type}
          value={data[1]}
          onChange={(e) => {
            onFieldChange(data[0], e.target.value)
          }}
        />
        <h5>{errorsForm[`${data[0]}`]}</h5>
        </Fragment>
      );
  }

  return (
    <>
      <FormStyle onSubmit={onSubmit}>   
        {Object.entries(formData).map(eachTextField)}
        {children}
      </FormStyle>
    </>
  );
};
export default Form;
