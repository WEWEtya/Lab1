import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-page">

      {/* ---------- Hero / Banner ---------- */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About WEW Studios</h1>
          <p>We craft immersive games that inspire and entertain players worldwide.</p>
        </div>
      </div>

      {/* ---------- Mission Section ---------- */}
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          PixelForge Studios exists to push the boundaries of interactive storytelling. 
          We combine art, technology, and creativity to deliver unforgettable experiences.
        </p>
      </div>

      {/* ---------- Office / Workspace ---------- */}
      <div className="about-office">
        <div className="about-office-overlay">
          <h2>Our Workspace</h2>
          <p>Where creativity meets technology to craft amazing experiences.</p>
        </div>
      </div>

      {/* ---------- Timeline ---------- */}
      <div className="about-timeline">
        <div className="timeline">
          <div className="timeline-item">
            <span className="year">2025</span>
            <p>Latest hit: <strong>"Galactic Forge"</strong></p>
          </div>
          <div className="timeline-item">
            <span className="year">2016</span>
            <p>Released second game: <strong>"Neon Drift"</strong></p>
          </div>
          <div className="timeline-item">
            <span className="year">2013</span>
            <p>Released first game: <strong>"Shadow Realm"</strong></p>
          </div>
          <div className="timeline-item">
            <span className="year">2010</span>
            <p>Founded PixelForge Studios</p>
          </div>
        </div>
      </div>

      {/* ---------- Gallery Quick Card ---------- */}
      <div className="about-gallery-card">
        <Link to="/gallery" className="quick-card">
          <div className="overlay"></div>
          <div className="content">
            <h2>Explore our Gallery</h2>
            <p>Our games and projects.</p>
          </div>
        </Link>
      </div>

    </section>
  );
}
