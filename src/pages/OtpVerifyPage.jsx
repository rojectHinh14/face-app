import React from 'react'
import OtpInput from '../components/FormInput/OtpInput';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import FormField from '../components/FormField';

const OtpVerifyPage = () => {
    const { control, handleSubmit } = useForm();
    
  
    const onSubmit = (data) => {
      console.log("Dữ liệu form:", data);
    };
  
    return (
        <div>
          <h1 className='text-2xl font-bold mb-6'>Two-Step Verification</h1>

          {/* ✅ Đảm bảo gọi handleSubmit đúng cách */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              name="Otp"
              label="Type your 6 digits security code"
              control={control}
              Component={OtpInput}
            />
          
  
            <Button type="submit" variant="contained" fullWidth>
              Verify Account
            </Button>
          </form>
  
          <p className="mt-4 text-sm text-center">
            Didn't get the cod ? <Link to="/login">Send again</Link>
          </p>
        </div>
   
    );
  };
  
export default OtpVerifyPage
