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
          href="https://open.spotify.com/playlist/6IH5iUh1oksNhEZZFsvd1q?si=c2_Mw4XhSBCHfHJQtDVlLw&pi=u-cF-w4JpVTAWS&pt=e36d716698ff564e3cb985968bb9914f"
          target="_blank"
        >
          <FaSpotify className="spotify-icon" />
        </a>
      </div>
    </div>
  );
}

export default Share;
