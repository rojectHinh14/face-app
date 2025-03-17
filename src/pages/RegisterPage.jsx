import React, { use, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../components/FormInput/TextInput';
import FormField from '../components/FormField';
import { Alert, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../service/rootApp';
import { useDispatch } from 'react-redux';
import { openSnackBar } from '../redux/slice/snackBarSlice';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
const RegisterPage = () => {
  // ✅ Đảm bảo lấy đúng control
  const [register,{ data, isLoading, error, isError, isSuccess}] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    fullName: yup.string().required("Họ và Tên không được để trống"),
    email: yup
      .string()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email không hợp lệ")
      .required("Email không được để trống"),
    password: yup.string().required("Mật khẩu không được để trống"),
  });
  
  const { control, handleSubmit , formState:{errors}} = useForm({
    resolver: yupResolver(formSchema)
  });


  const onSubmit = (data) => {
    console.log("Dữ liệu form:" , {data, isLoading, error});
    register(data);
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(openSnackBar({ message: "Success Register", type: "success" }));
      navigate('/login');
    }
  }, [isSuccess, data?.message, navigate, dispatch]);
  

  return (
      <div>

        {/* ✅ Đảm bảo gọi handleSubmit đúng cách */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name="fullName"
            label="Họ và Tên"
            control={control}
            Component={TextInput}
            error={errors['fullName']}
          />
          <FormField
            name="email"
            label="Email"
            control={control}
            Component={TextInput}
            error={errors['email']}          />
          <FormField
            name="password"
            label="Mật khẩu"
            type="password"
            control={control}
            Component={TextInput}
            error={errors['password']}
          />

          <Button type="submit" variant="contained" fullWidth>
            Đăng ký
          </Button>
          {isError && <Alert  className='mt-5' severity="error">{error?.data?.message || 'Email khong hop le'}</Alert>}
          </form>

        <p className="mt-4 text-sm text-center">
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </p>
      </div>
 
  );
};

export default RegisterPage;
