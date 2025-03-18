import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import '@fontsource-variable/public-sans';
import { Alert, Snackbar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { closeSnackBar } from '../redux/slice/snackBarSlice';
import Header from '../components/Header';

const RootLayout = () => {
  const dispatch = useDispatch();
  const { open, type, message } = useSelector((state) => state.snackBar);

  const handleClose = () => dispatch(closeSnackBar());

  return (
    <div className="text-gray-400">
      <Suspense fallback={<p>Loading...</p>}>
      <Header/>
        <Outlet />
      </Suspense>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          severity={type} // ✅ Đúng: `severity` không phải `security`
          variant="filled"
          sx={{ width: '100%' }}
          onClose={handleClose}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RootLayout;
