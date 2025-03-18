import React, { useEffect } from 'react'
import OtpInput from '../components/FormInput/OtpInput';
import { useForm } from 'react-hook-form';
import { Button, CircularProgress } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
import { useVerifyOtpMutation } from '../service/rootApp';
import { useDispatch } from 'react-redux';
import { openSnackBar } from '../redux/slice/snackBarSlice';
import { login } from '../redux/slice/authSlice';

const OtpVerifyPage = () => {
    const { control, handleSubmit } = useForm();
    const loaction = useLocation()
    const [verifyOtp, [data,error, isLoading, isError, isSuccess]] = useVerifyOtpMutation();
  
    const onSubmit = (data) => {
      console.log("Dữ liệu form:", data);
      verifyOtp({otp: data.otp, email: location?.state?.email})
    };
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(()=>{
      if(isError){
        dispatch(openSnackBar({type : "error", message: error?.data?.message}));
      }
      if(isSuccess){
        dispatch(login({data}));
        navigate("/")
      }
    }, [isError, data,error, dispatch, data.message, isSuccess, navigate])
  
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
             {isLoading && <CircularProgress size="16px" className='mr-1'></CircularProgress>} Verify Account
            </Button>
          </form>
  
          <p className="mt-4 text-sm text-center">
            Didn't get the cod ? <Link to="/login">Send again</Link>
          </p>
        </div>
   
    );
  };
  
export default OtpVerifyPage
