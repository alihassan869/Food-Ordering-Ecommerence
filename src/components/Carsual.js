import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assests/images/showcase1.jpg';
import img2 from '../assests/images/showcase2.jpg';
import img3 from '../assests/images/showcase3.jpg';
function Carusal() {
  return (
    <>
      <Carousel variant="dark" >
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>SUPER SALE DISCOUNT 50%</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h5>SUPER SALE DISCOUNT 50%</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h5>SUPER SALE DISCOUNT 50%</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carusal;
