import { useState, useEffect } from "react";
import songFile from "./fonseca-envivoydirecto.mp3";
import artWork from "../../assets/musicPlayer.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import "./audio.css";

type TrackInfo = {
  albumName: string;
  trackName: string;
  albumArtUrl: string;
};

function MusicPlayer() {
  const [audio] = useState(new Audio(songFile));
  const [isPlaying, setIsPlaying] = useState(false);
  const [] = useState(0);
  const [trackInfo] = useState<TrackInfo>({
    albumName: "Album Name", // Set your album name here
    trackName: "Track Name", // Set your track name here
    albumArtUrl: artWork, // Use your album art URL
  });

  useEffect(() => {
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, [audio]);

  const togglePlay = () => {
    if (audio.currentTime === audio.duration) {
      audio.currentTime = 0;
    }

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const restartSong = () => {
    audio.currentTime = 0;

    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const endSong = () => {
    audio.pause();
    audio.currentTime = audio.duration;
    setIsPlaying(false);
  };

  return (
    <div id="app-cover">
      <div id="bg-artwork">
        <div id="player-content">
          <div id="album-art" className={`active ${isPlaying ? "rotate" : ""}`}>
            <img
              src={trackInfo.albumArtUrl}
              className="active"
              alt="album-art"
            />
          </div>
          <div id="player-controls">
            <div className="control">
              <div
                className="button-player"
                id="play-previous"
                onClick={restartSong}
              >
                <FontAwesomeIcon icon={faBackward} />
              </div>
            </div>
            <div className="control">
              <div
                className="button-player"
                id="play-pause-button"
                onClick={togglePlay}
              >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
              </div>
            </div>
            <div className="control">
              <div className="button-player" id="play-next" onClick={endSong}>
                <FontAwesomeIcon icon={faForward} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
