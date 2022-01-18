import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './app-carousel.css';
import Image1 from "../../img/carousel1.jpg";
import Image2 from "../../img/carousel2.jpg";
import Image3 from "../../img/carousel3.jpg";

const AppCarousel = () => {
  return(
    <Container className="carousel">
      <h1 className="text-center" id="last-works">My last works</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image1}
            alt="First slide" 
          />
          <Carousel.Caption>
            <h3>Last works</h3>
            <h6>Beautiful people can be the best inspiration.</h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Last works</h3>
            <h6>Beautiful places inspire as well.</h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Last works</h3>
            <h6>And only we make this world so wonderful.</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default AppCarousel;
