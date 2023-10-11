import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Searchbar from './Searchbar'
const Header = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home" className='text-light'>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto ">
                        {/* <Searchbar /> */}
                        <Link to='/' className='text-light text-decoration-none m-1'>Home</Link>
                        <Link to='/' className='text-light text-decoration-none m-1'>About us</Link>
                        <Link to='/' className='text-light text-decoration-none m-1'>Services</Link>
                        <Link to='/' className='text-light text-decoration-none m-1'>Contact us</Link>
                        <Link to='/otp' className='text-light text-decoration-none m-1'>Log in</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )

}

export default Header
