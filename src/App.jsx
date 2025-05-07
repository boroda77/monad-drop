import { useState } from "react";
import "./index.css";

export default function MonadDrop() {
  const [clicked, setClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const playlist = [
    {
      name: "Ivoxygen Falling",
      src: "/music/Ivoxygen Falling.mp3",
    },
    {
      name: "Lxst Cxntury Amnesia",
      src: "/music/Lxst Cxntury Amnesia.mp3",
    },
    {
      name: "lxst-cxntury-odium",
      src: "/music/lxst-cxntury-odium.mp3",
    },
    {
      name: "HXVRMXN_-_South",
      src: "/music/HXVRMXN_-_South.mp3",
    },
    {
      name: "Bad Smith - ARTEMIDA",
      src: "/music/Bad Smith - ARTEMIDA.mp3",
    },
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
            {/* <h1 className="typewriter">🎵 Playlist</h1> */}

            <div
              style={{
                marginTop: "1rem",
                backgroundColor: "#111",
                padding: "1.5rem",
                borderRadius: "1rem",
                // boxShadow: "0 0 20px #8000ff",
                width: "100%",
                maxWidth: "500px",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#fff",
              }}
            >
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "1rem" }}>
                {playlist.map((track, index) => (
                  <li
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      cursor: "pointer",
                      padding: "0.5rem",
                      marginBottom: "0.3rem",
                      backgroundColor: currentIndex === index ? "#2a2a2a" : "#1a1a1a",
                      // border: "1px solid #8000ff",
                      borderRadius: "0.5rem",
                      transition: "all 0.2s ease-in-out",
                      boxShadow: currentIndex === index ? "0 0 10px #8000ff" : "none",
                    }}
                  >
                    {track.name}
                  </li>
                ))}
              </ul>

              {currentIndex !== null && (
                <>
                  {/* <div style={{ marginBottom: "1rem" }}>
                    🎧 Now playing: {playlist[currentIndex].name}
                  </div> */}
                  <audio
                    controls
                    autoPlay
                    src={playlist[currentIndex].src}
                    onEnded={() => {
                      setCurrentIndex((currentIndex + 1) % playlist.length);
                    }}
                    style={{
                      width: "100%",
                      borderRadius: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  />
                </>
              )}
            </div>

            <p className="footnote">gremlin & crypto</p>
          </div>
        </div>
      </div>
    </div>
  );
}
