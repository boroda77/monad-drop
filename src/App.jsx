import { useState } from "react";
import "./index.css";

export default function MonadDrop() {
  const [clicked, setClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const playlist = [
    { name: "Ivoxygen Falling", src: "/music/Ivoxygen Falling.mp3" },
    { name: "Lxst Cxntury Amnesia", src: "/music/Lxst Cxntury Amnesia.mp3" },
    { name: "lxst-cxntury-odium", src: "/music/lxst-cxntury-odium.mp3" },
    { name: "HXVRMXN_-_South", src: "/music/HXVRMXN_-_South.mp3" },
    { name: "Bad Smith - ARTEMIDA", src: "/music/Bad Smith - ARTEMIDA.mp3" },
  ];

  const handleClick = () => {
    setClicked(true);
    console.log("🔥 Monad interaction triggered");
  };

  return (
    <div className="container">
      {/* Логотип */}
      <a
        href="https://www.monad.xyz/"
        target="_blank"
        rel="noopener noreferrer"
        className="logo"
      >
        <img src="/monad-logo.png" alt="Monad Logo" className="logo-img" />
      </a>

      {/* Flip card */}
      <div className={`flip-card ${clicked ? "flipped" : ""}`}>
        <div className="flip-inner">
          {/* Front Side */}
          <div className="flip-front">
            <h1 className="typewriter">Listen and Work.</h1>
            <p>Monad MoFi Music</p>
            <button onClick={handleClick}>🔥 Open Playlist</button>
            <p className="footnote">Powered by gremlin & crypto.</p>
          </div>

          {/* Back Side */}
          <div className="flip-back">
            <div className="playlist-box">
              <ul>
                {playlist.map((track, index) => (
                  <li
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={currentIndex === index ? "active" : ""}
                  >
                    {track.name}
                  </li>
                ))}
              </ul>

              {currentIndex !== null && (
                <audio
                  controls
                  autoPlay
                  src={playlist[currentIndex].src}
                  onEnded={() => {
                    setCurrentIndex((currentIndex + 1) % playlist.length);
                  }}
                />
              )}
            </div>
            <p className="footnote">gremlin & crypto</p>
          </div>
        </div>
      </div>
    </div>
  );
}
