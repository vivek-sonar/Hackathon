import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "./Registration.css"
const Registration = () => {
  return (

    <div className='mt-3 mb-3  d-flex justify-content-center align-item-center height '>
      <div className=' bg-primary  d-flex justify-content-center align-item-center round width' >
        
        <div className='p-3  w-75  '>
        
          <h1 className='text-center'>Registration</h1>

          <Form.Control type="text" placeholder="Full name*" className=' mt-4'/>
          <Form.Control type="date" placeholder="DOB*" className=' mt-3' />
          
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" className='mt-3 p-3' />
          <label class="form-check-label" for="exampleRadios1" className='padding'> Male </label>

          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" className='mt-3 p-3 ' />
          <label class="form-check-label" for="exampleRadios1" className='padding'> Female</label>

          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" className='mt-3 p-3 ' />
          <label class="form-check-label" for="exampleRadios1" className='padding'> Other</label>

          <Form.Control type="text" placeholder="Mobile Number*" className='  mt-3' />
          <Form.Control type="text" placeholder="Email ID*" className=' mt-3' />
          <Form.Control type="password" placeholder="Password*" className=' mt-3' />

          <div className='d-flex justify-content-center align-item-center'>
            <Button className='rounded-pill mt-3  w-50 bg-dark '> Submit</Button>
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default Registration
