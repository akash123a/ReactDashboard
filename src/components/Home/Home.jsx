import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";

function User({ name }) {
  return <h3>{name}</h3>;
}

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1200/400?1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>React Bootstrap Slider</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1200/400?2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Homepage Carousel</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p>User name={"Apex"}</p>
      <User name="John Doe" />

      <h2 className="text-center mt-4">Home Page</h2>
    </>
  );
};

export default Home;