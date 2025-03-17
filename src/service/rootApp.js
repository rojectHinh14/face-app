import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rootApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }), 
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ fullName, email, password }) => ({
        url: '/register',
        method: 'POST',
        body: { fullName, email, password },
      }),
    }),
    login: builder.mutation({
        query:() =>{
            return {
                url : '/login',
                body:{email, password},
                method: 'POST'
            }
        }
    }),
    verifyOtp: builder.mutation({
        query:() =>{
            return {
                url : '/verify-otp',
                body:{email, otp},
                method: 'POST'
            }
        }
    })
  }),
  
  
});

export const { useRegisterMutation, useLoginMutation } = rootApi;
