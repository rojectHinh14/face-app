import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import FormField from '../components/FormField';
import TextInput from '../components/FormInput/TextInput';
import { Button, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice/authSlice';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from '../service/rootApp';
import { openSnackBar } from '../redux/slice/snackBarSlice';

const LoginPage = () => {
  const [loginMutation, { data = {}, isLoading, error, isError, isSuccess }] = useLoginMutation();
  const formSchema = yup.object().shape({
      email: yup
        .string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email không hợp lệ")
        .required("Email không được để trống"),
      password: yup.string().required("Mật khẩu không được để trống"),
    });
    
    const { control, handleSubmit , formState:{errors}} = useForm({
      resolver: yupResolver(formSchema)
    });
    const navigate = useNavigate();
  

  const dispatch = useDispatch();
  useEffect(()=>{
   if (isError){
    dispatch(openSnackBar({type : "error",  message: error?.data?.message || "Đăng nhập thất bại, vui lòng thử lại!",
    }))

   };
   if(isSuccess){
    dispatch(openSnackBar({ message: error?.data?.message || "Dang nhap thanh cong"}))
    navigate("/verify-otp"),{
      state: {
        email: getValues('emails')
      }
    }
   }
  }, [isError, error, dispatch,getValues, isSuccess, data.message, navigate])

  const onSubmit = (data) => {
    console.log("Dữ liệu form:", data);
    loginMutation(data)
  };


  return (
      <div>

        {/* ✅ Đảm bảo gọi handleSubmit đúng cách */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name="email"
            label="email"
            control={control}
            Component={TextInput}
            error={errors["email"]}
          />
          <FormField
            name="password"
            label="Mật khẩu"
            type="password"
            error={errors["password"]}
            control={control}
            Component={TextInput}
          />

          <Button type="submit" variant="contained" fullWidth >
            Sign in {isLoading && <CircularProgress size="15px"/>}
          </Button>
        </form>

        <p className="mt-4 text-sm text-center">
          Đã có tài khoản? <Link to="/register">Create Account</Link>
        </p>
      </div>
 
  );
};


export default LoginPage
