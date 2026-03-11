import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1200/400?1"
          alt="slide1"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>React Reusable Slider</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1200/400?2"
          alt="slide2"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Reusable Component</p>
        </Carousel.Caption>
      </Carousel.Item>
  
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1200/400?3"
          alt="slide3"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Reusable Component</p>
        </Carousel.Caption>
  
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;