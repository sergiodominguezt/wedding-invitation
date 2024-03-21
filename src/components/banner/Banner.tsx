import { useState, useEffect } from "react";
import banner from "../../assets/banner.jpg";
import "./banner.css";

const Banner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = banner;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div
      className="banner"
      style={{ visibility: imageLoaded ? "visible" : "hidden" }}
    >
      <img
        src={banner}
        alt="Imagen de boda"
        className="responsive-image"
        onLoad={() => setImageLoaded(true)}
      />
      {imageLoaded && (
        <>
          <div className="texto">
            <h1>¡Nos casamos!</h1>
          </div>
          <div className="banner-date">
            <h2>29 . 06 . 2024</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;
