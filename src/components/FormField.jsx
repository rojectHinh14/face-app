import { FormHelperText } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const FormField = ({ control, label,error, name, Component, type }) => {
  if (!control) {
    console.error("❌ Không tìm thấy control!");
    return null;
  }

  return (
    <div className="mb-4">
      {label && <p className='font-bold mb-1'>{label}</p>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Component {...field} type={type} />
        )}
      />
     {error && <FormHelperText error>{error.message}</FormHelperText>}

    </div>
  );
};

export default FormField;
