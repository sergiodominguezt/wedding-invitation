import banner from "../../assets/banner.jpg";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="Imagen de boda" className="responsive-image" />
      <div className="texto">
        <h1>¡Nos casamos!</h1>
      </div>
      <div className="banner-date">
        <h2>29 . 06 . 2024</h2>
      </div>
    </div>
  );
};

export default Banner;
