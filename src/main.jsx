import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout.jsx';
import { ThemeProvider } from '@emotion/react';
import theme from "./config/muiConfig.jsx"
import HomePage from './pages/HomePage.jsx';
import ModalProvider from './context/ModalProvider'; 
import RegisterPage from './pages/RegisterPage.jsx';
import './index.css'
import AuthLayout from './pages/AuthLayout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import OtpVerifyPage from './pages/OtpVerifyPage.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

const router = createBrowserRouter([
  {
    element : <RootLayout/>,
    children: [
      { 
        path: '/',
      element: <HomePage/>
    },

    {
     element: <AuthLayout/>,
     children:[
      {
      
          path:'/register',
          element: <RegisterPage/>
     
    
      },
      {
        path:'/login',
        element: <LoginPage/>
      },
      {
        path:'/verify-otp',
        element:<OtpVerifyPage/>
      }
     ]
    }


  
  ]}
   
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>


    <ThemeProvider theme={theme}> 
<ModalProvider>
  <RouterProvider  router={router}></RouterProvider >
  </ModalProvider>
    </ThemeProvider>
    </Provider>
)
