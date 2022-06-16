// Carousel to display 4 Pictures
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../style-sheets/PicturesCarousel.css';

const PicturesCarousel = (props) => {
  return (
    <div className='container carousel-container'>
      <div className='row'>
      <div className='col-sm-3'></div>
      <div className='col-sm-6'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.pic1}
              alt="First slide of carousel"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.pic2}
              alt="Second slide of carousel"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.pic3}
              alt="Third slide of carousel"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.pic4}
              alt="Fourth slide of carousel"
            />    
          </Carousel.Item>

        </Carousel>  
      </div>
      <div className='col-sm-3'></div>
      </div>
      
    </div>
  )
}

export default PicturesCarousel