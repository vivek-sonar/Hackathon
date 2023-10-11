import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "./Otp.css"
const Otp = () => {
  return (

    <div className='mt-3 mb-3  m-left- 5 d-flex justify-content-center align-item-center otpheight'>
      <div className=' bg-primary  d-flex justify-content-center align-item-center  round form'>
        
        <div className='p-3  w-75  '>
        
          <h1 className='d-flex justify-content-center align-item-center'>Enter OTP</h1>

          <Form.Control type="number" placeholder="OTP*" className='  mt-4'/>

          <div className='d-flex justify-content-center align-item-center'>
            <Button className='rounded-pill mt-3  w-50 bg-dark'> Next</Button>
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default Otp
