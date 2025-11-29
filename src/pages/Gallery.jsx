import "./Gallery.css";
import { Link } from "react-router-dom";

import game1 from "../assets/aboutus.jpeg";
import game2 from "../assets/aboutus.jpeg";
import game3 from "../assets/aboutus.jpeg";
import game4 from "../assets/aboutus.jpeg";

export default function Gallery() {
  return (
    <section className="gallery-page">
      {/* ---------- Hero Section ---------- */}
      <div className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Gallery</h1>
          <p>Explore our games and projects through images and videos.</p>
        </div>
      </div>

      {/* ---------- Games Grid ---------- */}
      <div className="games-grid">
        <Link to="/gallery/1" className="game-card" style={{ backgroundImage: `url(${game1})` }}>
          <div className="overlay"></div>
          <div className="content">
            <h3>Shadow Realm</h3>
            <p>Our first immersive adventure game.</p>
          </div>
        </Link>

        <Link to="/gallery/2" className="game-card" style={{ backgroundImage: `url(${game2})` }}>
          <div className="overlay"></div>
          <div className="content">
            <h3>Neon Drift</h3>
            <p>Fast-paced racing in a neon cyberworld.</p>
          </div>
        </Link>

        <Link to="/gallery/3" className="game-card" style={{ backgroundImage: `url(${game3})` }}>
          <div className="overlay"></div>
          <div className="content">
            <h3>Galactic Forge</h3>
            <p>Explore space and craft your empire.</p>
          </div>
        </Link>

        <Link to="/gallery/4" className="game-card" style={{ backgroundImage: `url(${game4})` }}>
          <div className="overlay"></div>
          <div className="content">
            <h3>Pixel Arena</h3>
            <p>Multiplayer arena battles in pixel art style.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
