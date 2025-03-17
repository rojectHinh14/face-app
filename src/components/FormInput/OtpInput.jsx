import { MuiOtpInput } from 'mui-one-time-password-input'
import React from 'react'

const OtpInput = ({value, onChange}) => {
  return (
    <MuiOtpInput length={6} value={value} onChange={onChange}/>
  )
}

export default OtpInput
