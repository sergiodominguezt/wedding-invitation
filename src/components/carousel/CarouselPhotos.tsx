import { Carousel } from "react-bootstrap";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import carousel4 from "../../assets/carousel4.jpg";
import "./carouselPhotos.css";

function CarouselPhotos() {
  return (
    <div className="carousel-container">
      <h1>Nuestros momentos</h1>
      <Carousel>
        <Carousel.Item>
          <img src={carousel1} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={carousel2} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={carousel3} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={carousel4} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPhotos;
