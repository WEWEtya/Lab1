import "./Home.css";
import { Link } from "react-router-dom";

import heroImage from "../assets/hero-bg.jpg";
import bannerAbout from "../assets/about-banner.jpg";
import galleryImage from "../assets/Gallery.jpg";

export default function Home() {
  return (
    <section className="home-page">

      {/* ---------- HERO SECTION ---------- */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1>WEW Studios</h1>
          <p>Crafting immersive games that inspire and entertain.</p>
          <Link to="/gallery" className="hero-btn">
            Explore Our Games
          </Link>
        </div>
      </div>

      {/* ---------- NEWS SECTION ---------- */}
      <div className="news-section">
        <h2 className="section-title">News from WEW</h2>
        <div className="news-row">
          <Link to="/news" className="news-box">
            <div className="news-box-content">
              <h3>Latest News</h3>
              <p>All the newest updates from our studio.</p>
            </div>
          </Link>

          <Link to="/news" className="news-box">
            <div className="news-box-content">
              <h3>Events</h3>
              <p>Upcoming events and conventions.</p>
            </div>
          </Link>

          <Link to="/news" className="news-box">
            <div className="news-box-content">
              <h3>Dev Blog</h3>
              <p>Behind-the-scenes insights.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* ---------- QUICK SECTIONS ---------- */}
      <div className="quick-sections">
        <Link
          to="/about"
          className="quick-card"
          style={{ backgroundImage: `url(${bannerAbout})` }}
        >
          <div className="content">
            <h2>About Us</h2>
            <p>Meet our team and mission.</p>
          </div>
        </Link>

        <Link
          to="/gallery"
          className="quick-card"
          style={{ backgroundImage: `url(${galleryImage})` }}
        >
          <div className="content">
            <h2>Gallery</h2>
            <p>Explore our past games and projects.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
