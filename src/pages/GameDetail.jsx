import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gameData } from "../data/gameData";
import "./GameDetail.css";

export default function GameDetail() {
  const { id } = useParams();
  const game = gameData[id];
  const iframeRef = useRef(null);

  // Stop video when component unmounts
  useEffect(() => {
    return () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          '{"event":"command","func":"stopVideo","args":""}',
          "*"
        );
      }
    };
  }, []);

  if (!game) return <div>Game not found</div>; 

  return (
    <section className="game-detail-page">
      <div className="game-banner">
        <iframe
          ref={iframeRef}
          className="banner-video"
          src={
            game.bannerVideo +
            "?autoplay=1&mute=1&loop=1&playlist=" +
            game.bannerVideo.split("/").pop() +
            "&enablejsapi=1&controls=0&modestbranding=1&rel=0&showinfo=0"
          }
          title={game.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="overlay"></div>
        <div className="banner-content">
          <h1>{game.title}</h1>
          <p>
            {game.releaseDate} • {game.genre}
          </p>
        </div>
      </div>

      <div className="game-content">
        {game.description.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </section>
  );
}
