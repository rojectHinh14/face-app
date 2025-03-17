import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='bg-[#F8F7Fa] min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-md p-8 bg-white shadow-lg rounded-lg'>
        <h1 className='text-2xl font-bold mb-6'>Đăng ký</h1>

        <Suspense fallback={<p>Loading</p>}>
    <Outlet/>
    </Suspense>
  
      </div>
    </div>
  
  
  )
}

export default AuthLayout
