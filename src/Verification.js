import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "./Verification.css"
const Verification = () => {
    return (
        <div>
            <div className='mt-3 mb-3 d-flex justify-content-center align-items-center  '>
                <div className='d-flex justify-content-center align-items-center  bg-primary round width '>
                    <div className=' p-3 w-75 '>

                        <h1 className='text-center'>Verification</h1>

                        <div >
                        <label class="form-check-label fs-5 mt-3" for="exampleRadios1" > Enter Aadhar Number  </label>
                            <div className='d-flex'>
                                <Form.Control className='mt-4 w-50 ' type='text' placeholder='Enter*' />
                                <Form.Control className='mt-4 w-50 verification' type='text' placeholder='Enter*' />
                                <Form.Control className='mt-4 w-50 verification' type='text' placeholder='Enter*' />
                            </div>

                            <div className='d-flex'>
                                <Form.Control className='mt-4  w-50 ' type='text' placeholder='Captcha*' />
                                <Form.Control className='mt-4  w-75 verification' type='text' placeholder='Captcha*' />
                            </div>

                            <div className='d-flex justify-content-center align-items-center '>
                                <Button className='w-50 mt-4 bg-dark rounded-pill'>Next
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Verification
