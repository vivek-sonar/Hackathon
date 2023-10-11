import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import g from './Images/g.jpg'
import v from './Images/v.jpg'
import r from './Images/r.jpg'
import a from './Images/1.png'
import b from './Images/2.png'
import c from './Images/3.png'
import d from './Images/4.png'
import e from './Images/5.png'
import f from './Images/6.png'
import "./Middle.css"

const Middle = () => {
  return (
    <div>
      <div className=' d-flex  justify-content-center align-item-center mt-5 '>
        <Carousel className='   d-flex  justify-content-center w-75'>
          <Carousel.Item>
            <Image src={g} className=' height round w-100'></Image>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={v} className=' height round w-100'></Image>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={r} className=' height round w-100'></Image>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      <div className='d-flex justify-content-center align-item-center mt-5 '>

        <div className='category '> <Image src={a} className='h'></Image> </div>

        <div className='category'><Image src={b} className='h'></Image></div>

        <div className='category'><Image src={c} className='h'></Image></div>

        <div className='category'><Image src={d} className='h'></Image></div>

        <div className='category'><Image src={e} className='h'></Image></div>

        <div className='category'><Image src={f} className='h'></Image></div>

      </div>

    </div>


  )
}

export default Middle
