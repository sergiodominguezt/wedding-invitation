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
          href="https://open.spotify.com/playlist/6IH5iUh1oksNhEZZFsvd1q?si=4esfr7OhTziAs95TG2JHVg&pi=u-7PuqEhRTT4yW&pt=9cdfa6ca77b1415a0996a1f6e9a88299"
          target="_blank"
        >
          <FaSpotify className="spotify-icon" />
        </a>
      </div>
    </div>
  );
}

export default Share;
