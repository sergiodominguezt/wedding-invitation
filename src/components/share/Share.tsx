import "./share.css";
import { FaSpotify } from "react-icons/fa";

function Share() {
  return (
    <div className="share-container">
      <h1>Ayúdanos</h1>
      <p>¡Ayúdanos para que nuestra boda sea inolvidable!</p>
      <p>
        Agrega la música que deseas escuchar dando clic en el ícono de Spotify
      </p>
      <div className="spotify-icon">
        <a
          href="https://open.spotify.com/playlist/6IH5iUh1oksNhEZZFsvd1q?si=tC0wTqjxRkKAopKN3gua-g&pi=u-ihqSQ6O4Rt-H&pt=b9f7df2c8f3a5d097ef1c874956cf7fb"
          target="_blank"
        >
          <FaSpotify className="spotify-icon" />
        </a>
      </div>
    </div>
  );
}

export default Share;
