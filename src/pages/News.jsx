import "./News.css";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <section className="news-page">
      {/* ---------- Hero Section ---------- */}
      <div className="news-hero">
        <div className="news-hero-content">
          <h1>WEW Studios News</h1>
          <p>Stay updated with our latest games, events, and developer insights.</p>
        </div>
      </div>

      {/* ---------- News Sections ---------- */}
      <div className="news-sections">

        {/* ---------- Latest News ---------- */}
        <div className="news-category">
          <h2>Latest News</h2>
          <div className="news-cards">
            <Link to="/news/1" className="news-card">
              <div className="overlay"></div>
              <div className="content">
                <h3>New Game Teaser Released</h3>
                <p>Check out the first teaser for our upcoming title "Galactic Forge".</p>
                <span className="date">Nov 28, 2025</span>
              </div>
            </Link>
            <Link to="/news/2" className="news-card">
              <div className="overlay"></div>
              <div className="content">
                <h3>PixelForge Wins Award</h3>
                <p>We won "Best Indie Studio 2025" at the Global Game Awards.</p>
                <span className="date">Oct 10, 2025</span>
              </div>
            </Link>
          </div>
        </div>

        {/* ---------- Events ---------- */}
        <div className="news-category">
          <h2>Events</h2>
          <div className="news-cards">
            <Link to="/news/3" className="news-card">
              <div className="overlay"></div>
              <div className="content">
                <h3>Join Us at GameCon 2026</h3>
                <p>Meet our devs and play the latest demos live.</p>
                <span className="date">Jan 15, 2026</span>
              </div>
            </Link>
          </div>
        </div>

        {/* ---------- Dev Blog ---------- */}
        <div className="news-category">
          <h2>Dev Blog</h2>
          <div className="news-cards">
            <Link to="/news/4" className="news-card">
              <div className="overlay"></div>
              <div className="content">
                <h3>Designing Galactic Forge</h3>
                <p>Insights on the art, music, and level design of our newest game.</p>
                <span className="date">Nov 5, 2025</span>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
