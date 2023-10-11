import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "./login.css"
const Login = () => {
    return (
        <div className='mt-3 mb-3 d-flex justify-content-center align-items-center  '>
            <div className='d-flex justify-content-center align-items-center  bg-primary round width '>
                <div className=' p-3 w-75 '>
                    <div>
                        <h1 className='text-center'>Login</h1>
                    </div>
                    <div>
                        <Form.Control className='mt-4' type='text' placeholder='Username*' />
                        <Form.Control className='mt-4' type='password' placeholder='Password*'/>
                        <div className='d-flex justify-content-center align-items-center '>
                            <Button oncl className='w-50 mt-4 bg-dark rounded-pill'>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login






