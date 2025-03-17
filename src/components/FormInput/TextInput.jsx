import React from 'react';
import { TextField } from '@mui/material';
import { ClassNames } from '@emotion/react';

const TextInput = ({ onChange, value, type, name }) => {
  return (
    <TextField
    slotProps={{input: {classes: 'h-10 px-3 py-2'}}}
      fullWidth
      variant="outlined"
      name={name}
      type={type}
      value={value || ''}
      onChange={onChange}
    />
  );
};

export default TextInput;
