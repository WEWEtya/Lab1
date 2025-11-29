import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* ---------- Navigation Links ---------- */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* ---------- Social Media ---------- */}
        <div className="footer-social">
          <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
            <FaMapMarkerAlt />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} WEW Studios. All rights reserved.</p>
      </div>
    </footer>
  );
}
